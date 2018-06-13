from django.http import JsonResponse, HttpResponseBadRequest
from django.views.decorators.http import require_POST
from django.views.decorators.csrf import csrf_exempt
import json


@require_POST
@csrf_exempt
def calculate(request):
    try:
        params = json.loads(request.body)
        savings_amount = params.get("savingsAmount", None)
        savings_per_month = params.get("savingsPerMonth", None)
        interest_rate = params.get("interestRate", None)
        interest_payment_occurrence = params.get("interestPaymentOccurrence", None)

        if savings_amount is None or\
                interest_rate is None or\
                savings_per_month is None or\
                interest_payment_occurrence is None:
            return HttpResponseBadRequest("Required parameters are not provided.")

        spreadsheet = _calculate_progression(savings_amount, savings_per_month, interest_rate,
                                             interest_payment_occurrence)
        data = {
            "results": spreadsheet,
            "total": round(spreadsheet[list(spreadsheet.keys())[-1]])
        }
        return JsonResponse(data)
    except json.JSONDecodeError:
            return HttpResponseBadRequest("Please provide a dictionary with the right parameters.")


def _calculate_progression(savings_amount, savings_per_month, interest_rate, interest_payment_recurrence) -> dict:
    try:
        sheet = {}
        for x in range(0, int(50 * 12) + 1, interest_payment_recurrence):
            if len(sheet) == 0:
                base_amount = savings_amount
            else:
                base_amount = sheet[x - interest_payment_recurrence]
            next_amount = (base_amount + (savings_per_month * interest_payment_recurrence)) *\
                          (1 + (float(interest_rate) / 100.0))
            sheet[x] = next_amount

        return sheet
    except (KeyError, ValueError):
        raise

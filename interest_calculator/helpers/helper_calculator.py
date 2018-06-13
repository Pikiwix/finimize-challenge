"""Helper function for the calculator"""


def calculate_progression(savings_amount, savings_per_month, interest_rate, interest_payment_recurrence) -> dict:
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

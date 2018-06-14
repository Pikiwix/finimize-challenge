"""Helper function for the calculator"""


def calculate_progression(savings_amount, savings_per_month, interest_rate, interest_payment_recurrence) -> list:
    try:
        sheet = [savings_amount]
        counter = 1
        for x in range(1, int(50 * 12), interest_payment_recurrence):
            base_amount = sheet[counter - 1]
            next_amount = (base_amount + (savings_per_month * interest_payment_recurrence)) *\
                          (1 + (float(interest_rate) / 100.0))
            sheet.append(next_amount)
            counter = counter + 1

        return sheet
    except (KeyError, ValueError, IndexError) as e:
        print(e)
        raise

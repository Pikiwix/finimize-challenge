import json
from django.test import TestCase, Client


class CalculatorTestCase(TestCase):
    def setUp(self):
        self.client = Client()

    def test_calculate_function_monthly_payment(self):
        data = json.dumps({
            "savingsAmount": 1000,
            "savingsPerMonth": 10,
            "interestRate": 1.0,
            "interestPaymentOccurrence": 1
        })
        response = self.client.post('/calculate/', data, 'json')
        self.assertEqual(response.status_code, 200)
        data = json.loads(response.content)
        self.assertEqual(data['total'], 793943)

    def test_calculate_function_quarterly_payment(self):
        data = json.dumps({
            "savingsAmount": 1000,
            "savingsPerMonth": 10,
            "interestRate": 1.0,
            "interestPaymentOccurrence": 4
        })
        response = self.client.post('/calculate/', data, 'json')
        self.assertEqual(response.status_code, 200)
        data = json.loads(response.content)
        self.assertEqual(data['total'], 18604)

    def test_calculate_function_yearly_payment(self):
        data = json.dumps({
            "savingsAmount": 1000,
            "savingsPerMonth": 10,
            "interestRate": 1.0,
            "interestPaymentOccurrence": 12
        })
        response = self.client.post('/calculate/', data, 'json')
        self.assertEqual(response.status_code, 200)
        data = json.loads(response.content)
        self.assertEqual(data['total'], 9673)

    def test_calculate_function_bad_request(self):
        response = self.client.post('/calculate/')
        self.assertEqual(response.status_code, 400)

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from typing import List
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Service(BaseModel):
    id: int
    name: str
    price: int

@app.get("/api/data")
def get_data():
    return {"message": "Hello from FastAPI...123!"}

@app.get("/api/services", response_model=List[Service])
def get_services():
    services = [
        {"id": 1, "name": "Web Development", "price": 1000},
        {"id": 2, "name": "Mobile App Development", "price": 1500},
        {"id": 3, "name": "UI/UX Design", "price": 800},
        {"id": 4, "name": "SEO Optimization", "price": 500},
    ]
    return services

class FinancialRecord(BaseModel):
    year: str
    sales: float
    expenses: float
    operating_profit: float
    opm: float
    other_income: float
    interest: float
    depreciation: float
    profit_before_tax: float
    tax: float
    net_profit: float
    eps: float
    dividend_payout: float

@app.get("/api/financial-data", response_model=List[FinancialRecord])
def get_financial_data():
    data = [
        {
            "year": "Mar 2024",
            "sales": 240893,
            "expenses": 176597,
            "operating_profit": 64296,
            "opm": 0.27,
            "other_income": 3464,
            "interest": 778,
            "depreciation": 4985,
            "profit_before_tax": 61997,
            "tax": 0.26,
            "net_profit": 46099,
            "eps": 126.88,
            "dividend_payout": 0.58
        },
        {
            "year": "Mar 2023",
            "sales": 225458,
            "expenses": 166199,
            "operating_profit": 59259,
            "opm": 0.26,
            "other_income": 3449,
            "interest": 779,
            "depreciation": 5022,
            "profit_before_tax": 56907,
            "tax": 0.26,
            "net_profit": 42303,
            "eps": 115.19,
            "dividend_payout": 1.00
        },
        {
            "year": "Mar 2013",
            "sales": 62989,
            "expenses": 44950,
            "operating_profit": 18040,
            "opm": 0.29,
            "other_income": 1178,
            "interest": 48,
            "depreciation": 1080,
            "profit_before_tax": 18090,
            "tax": 0.22,
            "net_profit": 14076,
            "eps": 35.55,
            "dividend_payout": 0.31
        }
    ]
    return data
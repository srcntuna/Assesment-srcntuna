SELECT TOP 3 code, (Sum(gdp_per_capita)/Sum(govt_debt))*100 as percentage FROM (SELECT * FROM countries WHERE gdp_per_capita > 40000 AND year>DATEADD(year,-4,2022) )
GROUP BY code
ORDER BY (Sum(Price)/Sum(SupplierID))*100 DESC
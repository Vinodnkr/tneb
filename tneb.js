function calculateTax() {
    const incomeInput = document.getElementById('income');
    const income = parseInt(incomeInput.value);



    if (isNaN(income) || !Number.isInteger(income)) {
        alert('Please enter a valid number.');
        return;
    }

    const breakdownTable = document.getElementById('breakdownTable');
    breakdownTable.innerHTML = '<tr><th>Unit Slab</th><th>Unit</th><th>Rate(Rs)</th><th>Amount</th></tr>'; // Clear previous breakdown


    let st = 0;

    if (income < 500) {
        if (income < 100) {
            st = 0;
            addBreakdownRow(breakdownTable, 'Unit < 100', income, '0.00', "Rs 0");
        } else if (income > 100 && income <= 200) {
            const s = income - 100;
            st = 2.25 * s;
            addBreakdownRow(breakdownTable, 'Unit < 100', "100", '0.00', "Rs 0");
            addBreakdownRow(breakdownTable, 'Unit between 100 and 200', s, '2.25',
                `Rs ${st.toFixed(2)}`);
        } else if (income > 200 && income <= 400) {
            st += 225;
            const s = income - 200;
            st += s * 4.5;
            addBreakdownRow(breakdownTable, 'Unit < 100', "100", '0.00', "Rs 0");
            addBreakdownRow(breakdownTable, 'Unit between 100 and 200', '100', '2.25', 'Rs 225');
            addBreakdownRow(breakdownTable, 'Unit between 200 and 400', s, '4.50', ` Rs ${s*4.5}`);
        } else if (income > 400 && income <= 500) {
            st += 1125;
            const s = income - 400;
            st += s * 6;
            addBreakdownRow(breakdownTable, 'Unit < 100', "100", '0.00', "Rs 0");
            addBreakdownRow(breakdownTable, 'Unit between 100 and 200', '100', '2.25', 'Rs 225');
            addBreakdownRow(breakdownTable, 'Unit between 200 and 400', '200', '4.50', 'Rs 900');
            addBreakdownRow(breakdownTable, 'Unit between 400 and 500', s, '6.00', `Rs ${s*6}`);
        }
    } else {
        if (income < 100) {
            st = 0;
        } else if (income > 100 && income <= 400) {
            const s = income - 100;
            st += s * 4.5;
        } else if (income > 400 && income <= 500) {
            st += 1350;
            const s = income - 400;
            st += s * 6;
        } else if (income > 500 && income <= 600) {
            st += 1350 + 600;
            const s = income - 500;
            st += s * 8;
            addBreakdownRow(breakdownTable, 'Unit < 100', "100", '0.00', "Rs 0");
            addBreakdownRow(breakdownTable, 'Unit between 100 and 400', '300', '4.50', 'Rs 1350');
            addBreakdownRow(breakdownTable, 'Unit between 401 and 500', '100', '6.00', 'Rs 600');
            addBreakdownRow(breakdownTable, 'Unit between 501 and 600', s, '8.00', `Rs ${s*8}`);
        } else if (income > 600 && income <= 800) {
            st += 1350 + 600 + 800;
            const s = income - 600;
            st += s * 9;
            addBreakdownRow(breakdownTable, 'Unit < 100', "100", '0.00', "Rs 0");
            addBreakdownRow(breakdownTable, 'Unit between 100 and 400', '300', '4.50', 'Rs 1350');
            addBreakdownRow(breakdownTable, 'Unit between 401 and 500', '100', '6.00', 'Rs 600');
            addBreakdownRow(breakdownTable, 'Unit between 501 and 600', '100', '8.00', "Rs 800");
            addBreakdownRow(breakdownTable, 'Unit between 601 and 800', s, '8.00', `Rs ${s*9}`);
        } else if (income > 800 && income <= 1000) {
            st += 1350 + 600 + 800 + 1800;
            const s = income - 800;
            st += s * 10;
            addBreakdownRow(breakdownTable, 'Unit < 100', "100", '0.00', "Rs 0");
            addBreakdownRow(breakdownTable, 'Unit between 100 and 400', '300', '4.50', 'Rs 1350');
            addBreakdownRow(breakdownTable, 'Unit between 401 and 500', '100', '6.00', 'Rs 600');
            addBreakdownRow(breakdownTable, 'Unit between 501 and 600', '100', '8.00', "Rs 800");
            addBreakdownRow(breakdownTable, 'Unit between 601 and 800', '200', '9.00', 'Rs 1800');
            addBreakdownRow(breakdownTable, 'Unit between 801 and 1000', s, '10.00', `Rs ${s*10}`);
        } else if (income > 1000) {
            st += 1350 + 600 + 800 + 1800 + 2000;
            const s = income - 1000;
            st += s * 11;
            addBreakdownRow(breakdownTable, 'Unit < 100', "100", '0.00', "Rs 0");
            addBreakdownRow(breakdownTable, 'Unit between 100 and 400', '300', '4.50', 'Rs 1350');
            addBreakdownRow(breakdownTable, 'Unit between 401 and 500', '100', '6.00', 'Rs 600');
            addBreakdownRow(breakdownTable, 'Unit between 501 and 600', '100', '8.00', "Rs 800");
            addBreakdownRow(breakdownTable, 'Unit between 601 and 800', "200", '9.00', 'Rs 1800');
            addBreakdownRow(breakdownTable, 'Unit between 801 and 1000', '200', '10.00', 'Rs 2000');
            addBreakdownRow(breakdownTable, 'Unit between more than 1001 ', s, '11.00', `Rs ${s*11}`);
        }
    }



    const breakdownDiv = document.getElementById('breakdown');
    breakdownDiv.style.display = 'block';


    // Display the result
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Total Rupees: Rs ${st.toFixed(2)}`;
}


function addBreakdownRow(breakdownTable, unitSlab, unit, ratePerUnit, amount) {
    const row = breakdownTable.insertRow(-1);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    cell1.innerHTML = unitSlab;
    cell2.innerHTML = unit;
    cell3.innerHTML = ratePerUnit;
    cell4.innerHTML = amount;
}

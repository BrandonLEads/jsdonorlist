"use strict";

/*

   Author:  BE
   
   Functions:
   
   calcSum(donorAmt)
      A callback function that adds the current donation amount in the array to the donationTotal variable
   
   findMajorDonors(donorAmt)
      A callback function that returns the value true only if the current donation amount in the array
      is greater than or equal to 1000
      
   donorSortDescending(a, b)
      A callback function used to sort the donation amounts from the array in descending order
      
   writeDonorRow(value)
      A callback function that writes the HTML code for each table row that provides the contact
      information for the donor
      
*/
let donationTotal = 0;
donors.forEach(calcSum); 

let summaryTable = "<table>\
<tr><th></th><td>" + donors.length + "</td></tr>\
<tr><th>Total Donations</th><td>$" + donationTotal.toLocaleString() + "</td></tr>\
</table>";

document.getElementById("donationSummary").innerHTML = summaryTable;

let majorDonors = donors.filter(findMajorDonors);

majorDonors.sort(donorSortDescending);

let donorTable = "<table>\
<caption>Major Donors</caption>\
<tr>\
<th>Donation</th><th>Donor ID</th>\
<th>Date</th><th>Name</th><th>Address</th>\
<th>Phone</th> <th>E-mail</th>\
</tr>";

majorDonors.forEach(writeDonorRow); 

document.getElementById("donorTable").innerHTML = donorTable;


function calcSum(donorAmt) {
   donationTotal += donorAmt[9];
}

function findMajorDonors(donorAmt) {
   return donorAmt[9] >= 1000;
}

function donorSortDescending(a, b) {
   return b[9] - a[9];
}

function writeDonorRow(value) {
   donorTable += "<tr>";
   donorTable += "<td>$" + value[9].toLocaleString() + "</td>";   
   donorTable += "<td>" + value[0] + "</td>";
   donorTable += "<td>" + value[10] + "</td>";   
   donorTable += "<td>" + value[2] + ", " + value[1] + "</td>";  
   donorTable += "<td>" + value[3] + "<br />" + value[4] + ", " + value[5] + " " + value[6]  + "</td>";    
   donorTable += "<td>" + value[7] + "</td>";   
   donorTable += "<td>" + value[8] + "</td>";         
   donorTable += "</tr>";
}

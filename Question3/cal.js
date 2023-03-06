function calculateTuitionFees() {
    var name = document.getElementById("student-name").value;
    var id = document.getElementById("student-id").value;
    var coursesTaken = parseInt(document.getElementById("courses-taken").value);
    
    var tuitionFees = 8000;
    var labFees = 5000;
    var discount = 0;
    const totalFee = tuitionFees * coursesTaken;
    
    if (coursesTaken > 5) {
    discount = totalFee * 0.1;
      labFees = 5000;
    } else if (coursesTaken > 3) {
      discount = totalFee*0.05;
      labFees = 6000;
    } else if (coursesTaken > 1) {
      discount =totalFee*0.03;
      labFees = 7000;
    }
    else{
      labFees = 8000;
     
    }
    
    // tuitionFees -= tuitionFees * discount;
    // var totalFees = (coursesTaken*tuitionFees) + labFees;
    const finalFee = (totalFee - discount)+labFees;
    
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "Name: " + name + "<br> ID: " + id + "<br> Tuition Fees: " + tuitionFees + " taka <br> Lab Fees: " + labFees + " taka <br> Total Fees: " + finalFee + " taka";
  }
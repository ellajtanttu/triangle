// Business Logic:

// UI Logic:
$("document").ready(function() {
  $("#triForm").submit(function(event) {
    event.preventDefault();
    $(".resultDiv").hide();
    $("#heroImg").hide();
    
    let a = parseInt($("#sideAInput").val());
    let b = parseInt($("#sideBInput").val());
    let c = parseInt($("#sideCInput").val());

    if (a === b && b === c && a === c) {
      $("#equilDiv").show();
    } else if (a === b && a !== c && a + b > c && b + c > a && a + c > b) {
      $("#isoDiv").show();
    } else if (a === c && a !== b && a + b > c && b + c > a && a + c > b) {
      $("#isoDiv").show();
    } else if (b === c && b !== a && a + b > c && b + c > a && a + c > b) {
      $("#isoDiv").show();
    } else if (a !== b && a !== c && b !== c && a + b > c && b + c > a && a + c > b) {
      $("#scalDiv").show();
    } else if (a + b <= c || a + c <= b || b + c <= a || a === NaN || b === NaN || c=== NaN) {
      $("#notDiv").show();
    } else {
      $("#errorDiv").show();
    }

  });
});

// Pre-Work:

/*
a + b > c && 


Equilateral: 3 sides are equal
  (a === b && b === c && a === c)

Isosceles: 2 sides are equal
  (a === b && a !== c && a + b > c && b + c > a && a + c > b)
  (a === c && a !== b && a + b > c && b + c > a && a + c > b)
  (b === c && b !== a && a + b > c && b + c > a && a + c > b)

Scalene: 0 sides are equal
  (a !== b && a !== c && b !== c && a + b > c && b + c > a && a + c > b)

Not a triangle: sum of 2 sides is less than or equal to third side
  (a + b <= c || a + c <= b || b + c <= a)

WIP ERRORS:
- Equilateral, ISO, and Scalene are all working. 
- Now those conditional statements need to be updated to reflect the not triangle parameters
- No input needs to be counted as something other than 0

- NaN is not turning up an error


*/
document.addEventListener("DOMContentLoaded", function() {
  var elementToHide = document.querySelector('.for-lod');
  if (elementToHide) {
    elementToHide.style.display = 'none';
  }
});

$(document).ready(function() {
  $('.bus').click(function() {
    var sugarLevel = parseInt($('.shagr').val());
    var weight = parseInt($('.h').val());

    if (isNaN(sugarLevel) || isNaN(weight)) {
      swal("تنبيه", "الرجاء إدخال قيم صحيحة لنسبة السكر ووزن المصاب.", "warning");
      return;
    }

    if (sugarLevel < 140 || sugarLevel > 520) {
      swal("تنبيه", "يجب أن تكون نسبة السكر بين 140 و 520", "warning");
      return;
    }

    if (weight < 25 || weight > 250) {
      swal("تنبيه", "يجب كتابة الوزن الصحيح", "warning");
      return;
    }


    // عملية حسابية هنا وعرض النتيجة في pop-up
    var result = calculateTreatment(sugarLevel);
    displayResult(sugarLevel, weight, result);
  });
});

function calculateTreatment(sugarLevel) {
  if (sugarLevel >= 200 && sugarLevel <= 300) {
    return 8;
  } else if (sugarLevel >= 400 && sugarLevel <= 500) {
    return 24;
  } else if (sugarLevel >= 300 && sugarLevel < 400) {
    return 16;
  } else if (sugarLevel >= 150 && sugarLevel < 200) {
    return 4;
  } else {
    return 0;
  }
}

function displayResult(sugarLevel, weight, result) {
  var message = `
    النتيجة:
    وزن المريض: ${weight}kg
    نسبة السكر: ${sugarLevel}
    العلاج: "${result}" Milligrams of aloe vera gel

  `;

  swal({
    title: "نتيجة العلاج",
    text: message,
    icon: "success",
    button: "موافق",
    content: "text",
    customClass: {
      text: "rtl",
    },
  });
}







$(document).ready(function() {
  animateText(".note1");
});

function animateText(selector) {
  var text = $(selector).text().trim();
  var newText = '';

  for (var i = 0; i < text.length; i++) {
    newText += '<span class="animated-text">' + text.charAt(i) + '</span>';
  }

  $(selector).html(newText);

  animateLetters(selector);
}

function animateLetters(selector) {
  $(selector + " .animated-text").each(function(i) {
    $(this).delay(i * 100).animate({ opacity: 1 }, 500);
  });
}
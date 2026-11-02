$(document).ready(function () {

  console.log("jQuery is ready!");

  $("h1").css("letter-spacing", "0.5px");
  $("#headline").text("Software Developer");
  $(".intro").css("font-size", "1.05rem");

  var greetings = [
    "Greeting 1",
    "Greeting 2",
    "Greeting 3"
  ];
  var greetingIndex = 0;
  $("#btn-greeting").on("click", function () {
    greetingIndex = (greetingIndex + 1) % greetings.length;
    $("#greeting").text(greetings[greetingIndex]);
    $("#headline").html("Software Developer");
  });

  $("#btn-dark").on("click", function () {
    $("html").attr("data-bs-theme", "dark");
    $("#profile").css("border", "1px solid #495057");
  });
  $("#btn-light").on("click", function () {
    $("html").attr("data-bs-theme", "light");
    $("#profile").css("border", "1px solid #dee2e6");
  });

  $("#btn-hide").on("click", function () { $("#status, #fun-facts").hide(); });
  $("#btn-show").on("click", function () { $("#status, #fun-facts").show(); });
  $("#btn-toggle").on("click", function () { $("#status, #fun-facts").toggle(); });

  $("#btn-fadeout").on("click", function () { $(".gallery-img").fadeOut(600); });
  $("#btn-fadein").on("click", function () { $(".gallery-img").fadeIn(600); });
  $("#btn-fadetoggle").on("click", function () { $(".gallery-img").fadeToggle(600); });

  $(".panel-head").on("click", function () {
    $(this).next(".panel").slideToggle(300);
    $(this).attr("aria-expanded", $(this).attr("aria-expanded") !== "true");
  });
  $("#btn-slideup").on("click", function () {
    $(".panel").slideUp(300);
    $(".panel-head").attr("aria-expanded", "false");
  });
  $("#btn-slidedown").on("click", function () {
    $(".panel").slideDown(300);
    $(".panel-head").attr("aria-expanded", "true");
  });
  $("#btn-slidetoggle").on("click", function () { $(".panel").slideToggle(300); });

  function getSkill() {
    var value = $.trim($("#skill-input").val());
    if (value === "") {
      $("#skill-msg").text("Please enter a skill first.");
      return null;
    }
    $("#skill-msg").text("");
    return value;
  }
  function newItem(text) { return $("<li>").addClass("list-group-item").text(text); }

  $("#btn-add").on("click", function () {
    var skill = getSkill();
    if (skill) { $("#skills-list").append(newItem(skill)); $("#skill-input").val("").focus(); }
  });
  $("#btn-prepend").on("click", function () {
    var skill = getSkill();
    if (skill) { $("#skills-list").prepend(newItem(skill)); $("#skill-input").val("").focus(); }
  });
  $("#btn-remove").on("click", function () {
    var $last = $("#skills-list li:last");
    if ($last.length) { $last.remove(); $("#skill-msg").text(""); }
    else { $("#skill-msg").text("The list is already empty."); }
  });

  var linkedin = false;
  $("#btn-link").on("click", function () {
    linkedin = !linkedin;
    $("#social-link")
      .attr("href", linkedin ? "https://www.linkedin.com" : "https://github.com/Cumcordia")
      .text(linkedin ? "My LinkedIn" : "My GitHub");
    $("#link-url").text($("#social-link").attr("href"));
    $(this).text(linkedin ? "Change link back to GitHub" : "Change link to LinkedIn");
  });

  $("#name-input").on("input", function () { $("#out-name").text($(this).val()); });
  $("#email-input").on("input", function () { $("#out-email").text($(this).val()); });

  var barsFilled = false;
  $("#btn-animate").on("click", function () {
    var $btn = $(this).prop("disabled", true);
    var $bars = $(".bar-fill");
    $bars.each(function (i) {
      var target = barsFilled ? "0%" : $(this).data("level") + "%";
      $(this).stop(true).animate({ width: target }, 900 + i * 200, function () {
        if (i === $bars.length - 1) { $btn.prop("disabled", false); }
      });
    });
    barsFilled = !barsFilled;
  });

});
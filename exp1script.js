// script.js
// Experiment 1 – Basic jQuery Implementation

$(document).ready(function () {

    // ---------------- Task 1 ----------------
    // Disable right-click context menu
    $(document).on("contextmenu", function (e) {
        e.preventDefault();
    });

    // Disable text selection
    $(document).on("selectstart", function (e) {
        e.preventDefault();
    });

    // Disable Ctrl + C
    $(document).on("keydown", function (e) {
        if (e.ctrlKey && e.keyCode === 67) { // 67 = 'C'
            e.preventDefault();
        }
    });

    // ---------------- Task 2 ----------------
    // Click image (div) to scroll to top
    $("#scrollTopImg").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 500);
    });

    // Scroll to specific section (Section 2)
    $("#scroll1Btn").click(function () {
        $("html, body").animate(
            { scrollTop: $("#section2").offset().top },
            500
        );
    });

    // ---------------- Task 3 ----------------
    // Change paragraph color on mouseover
    $("p").hover(
        function () { $(this).css("color", "red"); },
        function () { $(this).css("color", ""); }
    );

    // Highlight table row on mouseover
    $("tr").hover(
        function () { $(this).css("background", "yellow"); },
        function () { $(this).css("background", ""); }
    );

    // ---------------- Task 4 ----------------
    // Show / Hide message
    $("#showBtn").click(function () {
        $("#messageDiv").show();
    });

    $("#hideBtn").click(function () {
        $("#messageDiv").hide();
    });

    // Toggle visibility
    $("#toggleBtn").click(function () {
        $("#messageDiv").toggle();
    });

    // Fade effects
    $("#fadeInBtn").click(function () {
        $("#messageDiv").fadeIn();
    });

    $("#fadeOutBtn").click(function () {
        $("#messageDiv").fadeOut();
    });
});

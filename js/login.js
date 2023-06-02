console.log("aaaaaaaaaaaa")
$("#form-fodase").on("submit", function () {
    if ($("#password").val() == $("#confirm_password").val()) {
        return true;
    }
    console.log("batata")
    return false;
});

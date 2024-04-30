document.getElementById("notification-container").style.display = "none"
function showNotificationBox() {
    document.getElementById("notification-container").style.display = "flex"
}

function clearRelations() {
    let notificationBoxes = document.getElementsByClassName("notification-box");
    for (let i = 0; i < notificationBoxes.length; i++) {
        notificationBoxes[i].style.backgroundColor = "white";
    }
    document.getElementById("show-notification-btn").setAttribute("count", "0");

    document.getElementsByClassName("notification-box").style.backgroundColor = "white";
}
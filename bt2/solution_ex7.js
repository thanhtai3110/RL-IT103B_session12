
let subscriptions = [
    {
        subscriptionId: "SUB-001",
        customerName: "Nguyen Van An",
        planTier: "PERSONAL",
        deviceLimit: 1,
        status: "ACTIVE"
    },
    {
        subscriptionId: "SUB-002",
        customerName: "Tran Thi Mai",
        planTier: "FAMILY",
        deviceLimit: 5,
        status: "ACTIVE"
    },
    {
        subscriptionId: "SUB-003",
        customerName: "Le Minh Chau",
        planTier: "PERSONAL",
        deviceLimit: 1,
        status: "ACTIVE"
    }
];

// Hiển thị menu quản lý thuê bao
function showMenu() {
    console.log("\n========== RIKKEISTREAM ==========");
    console.log("1. Thêm thuê bao mới");
    console.log("2. Hiển thị danh sách thuê bao");
    console.log("3. Cập nhật gói cước");
    console.log("4. Hủy thuê bao");
    console.log("5. Thoát chương trình");
    console.log("==================================");
}

// Thêm thuê bao mới
function addSubscription() {
    let customerName = prompt("Nhập tên khách hàng:");

    if (customerName === null || customerName.trim() === "") {
        console.log("Tên khách hàng không hợp lệ!");
        return;
    }

    console.log("Chọn gói cước:");
    console.log("1. PERSONAL");
    console.log("2. FAMILY");

    let planChoice = prompt("Nhập lựa chọn:");

    if (planChoice === "1") {
        planChoice = "PERSONAL";
    } else if (planChoice === "2") {
        planChoice = "FAMILY";
    } else {
        console.log("Gói cước không hợp lệ!");
        return;
    }

    let subscriptionId = "SUB-" + String(subscriptions.length + 1).padStart(3, "0");
    let deviceLimit = 1;

    if (planChoice === "FAMILY") {
        deviceLimit = 5;
    }

    let newSubscription = {
        subscriptionId: subscriptionId,
        customerName: customerName.trim(),
        planTier: planChoice,
        deviceLimit: deviceLimit,
        status: "ACTIVE"
    };

    subscriptions.push(newSubscription);

    console.log("Thêm thuê bao thành công!");
    console.log("Mã thuê bao: " + subscriptionId);
}

// Hiển thị danh sách thuê bao
function listSubscriptions() {
    if (subscriptions.length === 0) {
        console.log("Danh sách thuê bao đang trống!");
        return;
    }

    console.table(subscriptions);
}

// Cập nhật gói cước thuê bao
function updateSubscription() {
    let subscriptionId = prompt("Nhập mã thuê bao cần cập nhật:");

    if (subscriptionId === null) {
        console.log("Đã hủy thao tác.");
        return;
    }

    let found = false;

    for (let i = 0; i < subscriptions.length; i++) {
        if (subscriptions[i].subscriptionId === subscriptionId.trim()) {
            found = true;

            console.log("1. PERSONAL");
            console.log("2. FAMILY");

            let planChoice = prompt("Chọn gói cước mới:");

            if (planChoice === "1") {
                subscriptions[i].planTier = "PERSONAL";
                subscriptions[i].deviceLimit = 1;
            } else if (planChoice === "2") {
                subscriptions[i].planTier = "FAMILY";
                subscriptions[i].deviceLimit = 5;
            } else {
                console.log("Gói cước không hợp lệ!");
                return;
            }

            console.log("Cập nhật gói cước thành công!");
            break;
        }
    }

    if (found === false) {
        console.log("Không tìm thấy mã thuê bao!");
    }
}

// Hủy thuê bao
function deleteSubscription() {
    let subscriptionId = prompt("Nhập mã thuê bao cần hủy:");

    if (subscriptionId === null) {
        console.log("Đã hủy thao tác.");
        return;
    }

    let found = false;

    for (let i = 0; i < subscriptions.length; i++) {
        if (subscriptions[i].subscriptionId === subscriptionId.trim()) {
            subscriptions.splice(i, 1);
            found = true;
            console.log("Hủy thuê bao thành công!");
            break;
        }
    }

    if (found === false) {
        console.log("Không tìm thấy mã thuê bao!");
    }
}

// Chạy chương trình quản lý thuê bao
let menuChoice;

do {
    showMenu();
    menuChoice = prompt("Nhập lựa chọn từ 1 đến 5:");

    switch (menuChoice) {
        case "1":
            addSubscription();
            break;
        case "2":
            listSubscriptions();
            break;
        case "3":
            updateSubscription();
            break;
        case "4":
            deleteSubscription();
            break;
        case "5":
            console.log("Đã thoát chương trình RikkeiStream!");
            break;
        case null:
            console.log("Đã thoát chương trình!");
            menuChoice = "5";
            break;
        default:
            console.log("Lựa chọn không hợp lệ! Vui lòng nhập từ 1 đến 5.");
    }
} while (menuChoice !== "5");

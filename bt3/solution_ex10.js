
const subscriptions = [
    { id: 1, name: "Cloud Basic", price: 100000 },
    { id: 2, name: "Cloud Pro", price: 200000 }
];

// Hiển thị danh sách thuê bao
function displaySubscriptions() {
    console.log("Danh sách thuê bao Cloud:");

    for (let i = 0; i < subscriptions.length; i++) {
        console.log(subscriptions[i]);
    }
}

// Thêm thuê bao mới
function addSubscription() {
    const newSubscription = {
        id: subscriptions.length + 1,
        name: "Cloud Premium",
        price: 300000
    };

    subscriptions.push(newSubscription);
    console.log("Đã thêm thuê bao.");
}

// Tính tổng tiền thuê bao
function calculateTotal() {
    let total = 0;

    for (let i = 0; i < subscriptions.length; i++) {
        total = total + subscriptions[i].price;
    }

    console.log("Tổng tiền:", total);
}

// Hiển thị menu
function displayMenu() {
    console.log("===== CLOUD MENU =====");
    console.log("1. Hiển thị thuê bao");
    console.log("2. Thêm thuê bao");
    console.log("3. Tính tổng tiền");
    console.log("0. Thoát");
}

// Điều khiển chương trình
let choice;

do {
    displayMenu();
    choice = prompt("Nhập lựa chọn:");

    switch (choice) {
        case "1":
            displaySubscriptions();
            break;

        case "2":
            addSubscription();
            break;

        case "3":
            calculateTotal();
            break;

        case "0":
            console.log("Đã thoát chương trình.");
            break;

        case null:
            choice = "0";
            console.log("Đã thoát chương trình.");
            break;

        default:
            console.log("Lựa chọn không hợp lệ.");
    }
} while (choice !== "0");

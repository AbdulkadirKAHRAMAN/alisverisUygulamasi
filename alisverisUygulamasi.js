const products= [
    {
        id:1,
        producName:"Iphone 16",
        productPrice: "90000",
        stock:10
    },
    {
        id:2,
        producName:"Xiaomi 14 ultra",
        productPrice: "70000",
        stock:10
    },
    {
        id:3,
        producName:"Samsung Galaxy S24 Ultrs",
        productPrice: "39900",
        stock:10
    }
]

const shoppingCart=[];
let balance= 0;


function isAccepted(msg, ...keys){
    const value = prompt(msg);
    
    if(keys.includes(value)){
        return value;
    }else{
        alert("hatalı tuşlama yaptınız")
        return isAccepted(msg, ...keys);
    }
}



function listProduc(){
    const productList = products.map((products,index)=> `${index+1}. ${products.producName} ${products.productPrice} `).join("\n");
    alert(productList);
}

function mainMenu(){
    const value=isAccepted("Yapmak istediğiniz işlemi seciniz \n1-ürünleri Listele \n2-Ürün satın al \n3-Sepeti Gör \n4-Bakiye Ekle \n5-Bakiyeyi göster \n6-Çıkış yap ", "1","2","3","4","5");
    
    if(value==1){
        return listProduc();
    }else if(value==2){
        return buyProduct();
    }else if(value==3){
        return seeCart();
    }else if(value==4){
        return balanceTopUp();
    }else if(value==5){
        return seeBalance();
    }
}

function buyProduct() {
    listProduc();  
    const value = parseInt(isAccepted("Satın almak istediğiniz ürünün listedeki sırasını giriniz", "1", "2", "3"), 10);
    
    if (isNaN(value) || value < 1 || value > products.length  ) {
        console.log("Geçersiz bir seçim yaptınız.");
        return;
    }
    const eklenenUrun = products[value - 1]; 
 
    if (eklenenUrun.productPrice<=balance) {
        shoppingCart.push(eklenenUrun); 
        alert(`${eklenenUrun.producName} sepete eklendi!`);
        balance -= selectedProduct.productPrice;
    } else {
        alert("Yetersiz bakiye. Ürünü satın alamazsınız.");
    }
    nextAction();
    seeCart(eklenenUrun);
}

function seeCart(){
    const strongBasket = shoppingCart.map((products,index)=> `${index+1}. ${products.producName} ${products.productPrice} `).join("\n");
    alert(strongBasket);
    nextAction();

}




function balanceTopUp() {
    const loadedAmount = parseFloat(prompt("Yükleme yapılacak tutarı giriniz:"));
    
    if (isNaN(loadedAmount) || loadedAmount < 0) {
        alert("Geçersiz bir miktar girdiniz.");
        return;
    }

    balance += loadedAmount;
    alert(`Yükleme başarılı! Yeni bakiyeniz: ${balance}`);
    nextAction();
}
function seeBalance(){
    alert(`Güncel Bakiyeniz: ${balance}`);
    nextAction();
}



    function nextAction(){
        const value = isAccepted("baska işlem yapmak istermisin? (e/h)", "e","h","E","H");
    
        if(value.toLowerCase()==="e"){
            return mainMenu();
    
        }else{
    
            return
        }
    }
mainMenu();
// ピックアップ変更
async function changePickUp(rarity, names) {
    try {
        const response = await fetch(`/admin/update_pickup?rarity=${rarity}&names=${names}`, {
            method: "POST",
            headers: {
                Authorization: `Bearer supersecret`,
            }
        });
        const text = await response.text();
        alert(text);
    } catch (error) {
        alert("通信エラーが発生しました");
    }
}
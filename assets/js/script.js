// social-icons
function showModal(imgSrc) {
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.style.backgroundColor = 'rgba(0,0,0,0.7)';
    modal.style.zIndex = '1000';
    const imgContainer = document.createElement('div');
    imgContainer.style.position = 'relative';
    imgContainer.style.display = 'flex';
    imgContainer.style.justifyContent = 'center';
    imgContainer.style.alignItems = 'center';
    imgContainer.style.padding = '5px';
    imgContainer.style.border = '1px solid #000000';
    imgContainer.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
    const img = document.createElement('img');
    img.src = imgSrc;
    img.style.maxWidth = '300px';
    img.style.maxHeight = '300px';
    img.style.cursor = 'pointer';
    imgContainer.appendChild(img);
    // 添加关闭按钮
    const closeButton = document.createElement('span');
    closeButton.className = 'close';
    closeButton.innerHTML = '&times;';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '1px';
    closeButton.style.right = '1px';
    closeButton.style.cursor = 'pointer';
    closeButton.style.fontSize = '30px';
    closeButton.style.fontWeight = 'bolder';
    closeButton.style.color = '#ff2121';
    closeButton.addEventListener('click', function () {
        document.body.removeChild(modal);
    });
    imgContainer.appendChild(closeButton);
    modal.appendChild(imgContainer);
    // 添加点击事件监听器，点击背景区域关闭模态框
    modal.addEventListener('click', function (event) {
        if (event.target === modal) {
            document.body.removeChild(modal);
        }
    });

    document.body.appendChild(modal);
}
// 为所有 .social-icons 中的图标添加点击事件
document.querySelectorAll('.social-icons a').forEach(function (icon) {
    icon.onclick = function (e) {
        const qrcodeSrc = this.getAttribute('data-qrcode');
        if (qrcodeSrc && qrcodeSrc !== '') {
            e.preventDefault();
            showModal(qrcodeSrc);
        }
    };
});
// 为所有 .btn-qr 中的链接添加点击事件
document.querySelectorAll('.btn-qr').forEach(function (btn) {
    btn.onclick = function (e) {
        e.preventDefault();
        const qrcodeSrc = this.getAttribute('data-qrcode');
        if (qrcodeSrc) {
            showModal(qrcodeSrc);
        }
    };
});
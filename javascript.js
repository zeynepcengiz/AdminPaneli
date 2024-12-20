function showContent(page) {
    const contentTitle = document.getElementById('content-title');
    const contentArea = document.getElementById('content-area');

    if (page === 'dashboard') {
        contentTitle.textContent = 'Dashboard';
        contentArea.innerHTML = 'Butona tıklandı yazısı gelecek.';
    } else if (page === 'users') {
        contentTitle.textContent = 'Kullanıcılar';
        contentArea.innerHTML = `
            <p>Kullanıcılar Listesi</p>
            <ul>
                <li>Kullanıcı 1</li>
                <li>Kullanıcı 2</li>
                <li>Kullanıcı 3</li>
            </ul>
        `;
    } else if (page === 'settings') {
        contentTitle.textContent = 'Ayarlar';
        contentArea.innerHTML = `
            <p>Ayarlar</p>
            <button type="button" onclick="alert('Ayarlar kaydedildi.')">Kaydet</button>
        `;
    }
}

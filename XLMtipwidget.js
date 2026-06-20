window.XLMButton = {
    init(options) {
        const config = options;

        const btn = document.getElementById('stellar-pay-btn');
        const amountInput = document.getElementById('stellar-amount');
        const qrcodeContainer = document.getElementById('qrcode-container');
        const qrcodeImg = document.getElementById('qrcode-img');
        const errorDiv = document.getElementById('stellar-error-msg');

        if (!btn || !amountInput || !qrcodeContainer || !qrcodeImg || !errorDiv) {
            return;
        }

        btn.addEventListener('click', () => {
            errorDiv.style.display = "none";
            errorDiv.innerText = "";
            qrcodeContainer.style.display = "none";

            const destination = config.destination;
            const amount = amountInput.value;

            if (!amount || parseFloat(amount) <= 0) {
                errorDiv.innerText = "Error: Enter a number greater than 0";
                errorDiv.style.display = "block";
                return;
            }

            const memo = "Sent by your site";

            const stellarUri =
                `web+stellar:pay?destination=${destination}&amount=${amount}&memo=${encodeURIComponent(memo)}&memo_type=MEMO_TEXT`;

            const isMobile = /Android|iPhone|iPad/i.test(navigator.userAgent);

            if (isMobile) {
                window.location.href = stellarUri;
            } else {
                const qrUrl =
                    `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(stellarUri)}`;

                qrcodeImg.src = qrUrl;
                qrcodeContainer.style.display = "block";
            }
        });
    }
};

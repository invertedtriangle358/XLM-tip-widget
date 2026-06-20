window.XLMButton = {
    init(options) {
        const container = document.getElementById(options.element);

        if (!container) return;

        container.innerHTML = `
            <input id="stellar-amount"
                type="number"
                placeholder="Amount XLM"
                style="padding:10px;width:100%;margin-bottom:10px;">

            <button id="stellar-pay-btn"
                style="
                background:#0866ff;
                color:white;
                border:none;
                padding:12px 24px;
                font-size:16px;
                border-radius:8px;
                cursor:pointer;
                width:100%;
                font-weight:bold;">
                Send a tip with Lumens
            </button>

            <div id="stellar-error-msg"
                style="color:red;font-size:12px;margin-top:10px;display:none;">
            </div>

            <div id="qrcode-container"
                style="margin-top:15px;display:none;">
                <img id="qrcode-img"
                    style="
                    border:1px solid #ccc;
                    padding:10px;
                    border-radius:8px;
                    width:200px;
                    height:200px;">
            </div>
        `;

        const btn = document.getElementById("stellar-pay-btn");
        const amountInput = document.getElementById("stellar-amount");

        btn.onclick = () => {
            const amount = amountInput.value;

            if (!amount || Number(amount) <= 0) {
                alert("Enter amount");
                return;
            }

            const uri =
            `web+stellar:pay?destination=${options.destination}&amount=${amount}`;

            const isMobile =
                /Android|iPhone|iPad/i.test(navigator.userAgent);

            if (isMobile) {
                location.href = uri;
            } else {
                const qr =
                `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(uri)}`;

                document.getElementById("qrcode-img").src = qr;
                document.getElementById("qrcode-container").style.display="block";
            }
        };
    }
};

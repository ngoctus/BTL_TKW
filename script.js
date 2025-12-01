document.addEventListener("DOMContentLoaded", function() {

    // Toggle mật khẩu
    function togglePassword(inputId, iconId) {
        const input = document.getElementById(inputId);
        const icon = document.getElementById(iconId);
        if (!input || !icon) return;

        icon.addEventListener("click", () => {
            if (input.type === "password") {
                input.type = "text";
                icon.src = "https://cdn-icons-png.flaticon.com/512/565/565655.png";
            } else {
                input.type = "password";
                icon.src = "https://cdn-icons-png.flaticon.com/512/159/159604.png";
            }
        });
    }

    togglePassword("password1", "eye1");
    togglePassword("password2", "eye2"); // chỉ Register có

    // Đổi màu nút khi nhập bất kỳ ô nào
    function activeButton(inputIds, btnSelector) {
        const btn = document.querySelector(btnSelector);
        if (!btn) return;

        function check() {
            const filled = inputIds.some(id => {
                const el = document.getElementById(id);
                return el && el.value.trim() !== "";
            });

            if (filled) btn.classList.add("active");
            else btn.classList.remove("active");
        }

        inputIds.forEach(id => {
            const el = document.getElementById(id);
            if (el) el.addEventListener("input", check);
        });
    }

    // Login
    activeButton(["user", "password1"], ".Buttons");

    // Register
    activeButton(["user", "password1", "password2"], ".Buttons");

});

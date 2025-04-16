document.addEventListener('DOMContentLoaded', () => {
    function showStep(id) {
        const steps = document.querySelectorAll('main section');
        steps.forEach(step => step.classList.add('invisible'));
        const current = document.getElementById(id);
        if (current) current.classList.remove('invisible');
    }

    document.getElementById('startRegistration')?.addEventListener('click', () => showStep('frame_2'));
    document.getElementById('next1')?.addEventListener('click', () => showStep('frame_3'));
    document.getElementById('back2')?.addEventListener('click', () => showStep('frame_2'));
    document.getElementById('cancel1')?.addEventListener('click', () => showStep('frame_1'));
    document.getElementById('sendCode')?.addEventListener('click', () => {
        const codeGroup = document.getElementById('codeGroup');
        if (codeGroup) codeGroup.style.display = 'block';
    });
    document.getElementById('verifyCode')?.addEventListener('click', () => {
        const code = document.getElementById('verificationCode')?.value;
        if (/^\d{4}$/.test(code)) {
            alert('Код подтверждён!');
            const nextBtn = document.getElementById('next2');
            if (nextBtn) nextBtn.disabled = false;
        } else {
            alert('Введите корректный 4-значный код!');
        }
    });
    document.getElementById('next2')?.addEventListener('click', () => showStep('frame_4'));
    document.getElementById('back3')?.addEventListener('click', () => showStep('frame_3'));
    document.getElementById('finish')?.addEventListener('click', () => {
        const checkbox = document.getElementById('terms');
        if (checkbox?.checked) {
            showStep('frame_5');
        } else {
            alert('Нужно согласиться с условиями!');
        }
    });
});

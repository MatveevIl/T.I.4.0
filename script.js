document.addEventListener('DOMContentLoaded', function() {
    const phoneCheck = document.getElementById('phone');
    const telegramCheck = document.getElementById('telegram');
    const whatsappCheck = document.getElementById('whatsapp');
    const vkCheck = document.getElementById('vk');
  
    const phoneField = document.getElementById('phone_field');
    const telegramField = document.getElementById('telegram_field');
    const whatsappField = document.getElementById('whatsapp_field');
    const vkField = document.getElementById('vk_field');
    const btnField = document.getElementById('btns_field');
  
    function updateContactFields(){
        phoneField.style.display = phoneCheck.checked ? 'block' : 'none';
        telegramField.style.display = telegramCheck.checked ? 'block' : 'none';
        whatsappField.style.display = whatsappCheck.checked ? 'block' : 'none';
        vkField.style.display = vkCheck.checked ? 'block' : 'none';

        document.getElementById('phone_field').required = phoneCheck.checked;
        document.getElementById('telegram_field').required = telegramCheck.checked;
        document.getElementById('whatsapp_field').required = whatsappCheck.checked;
        document.getElementById('vk_field').required = vkCheck.checked;

        btnField.style.display = (phoneCheck.checked || telegramCheck.checked || whatsappCheck.checked || vkCheck.checked) ? 'block' : 'none';
    }
    phoneCheck.addEventListener('change', updateContactFields);
    telegramCheck.addEventListener('change', updateContactFields);
    whatsappCheck.addEventListener('change', updateContactFields);
    vkCheck.addEventListener('change', updateContactFields);
    updateContactFields();
  });
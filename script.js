document.addEventListener('DOMContentLoaded', function() {
    const phoneCheck = document.getElementById('phone');
    const telegramCheck = document.getElementById('telegram');
    const whatsappCheck = document.getElementById('whatsapp');
    const vkCheck = document.getElementById('vk');
  
    const phoneField = document.getElementById('phone_field');
    const telegramField = document.getElementById('telegram_field');
    const whatsappField = document.getElementById('whatsapp_field');
    const vkField = document.getElementById('vk_field');
  
    function updateContactFields(){
        
    }
    /*function updateContactFields() {
      if (phoneRadio.checked) {
        phoneField.style.display = 'block';
        telegramField.style.display = 'none';
        whatsappField.style.display = 'none';
        vkField.style.display = 'none';
        document.getElementById('phone_number').required = true;
        document.getElementById('telegram_username').required = false;
        document.getElementById('whatsapp_field').required = false;
        document.getElementById('vk_field').required = false;
  
      } else if (telegramRadio.checked) {
        telegramField.style.display = 'block';
        phoneField.style.display = 'none';
        whatsappField.style.display = 'none';
        vkField.style.display = 'none';
  
        document.getElementById('telegram_username').required = true;
        document.getElementById('phone_number').required = false;
        document.getElementById('whatsapp_field').required = false;
        document.getElementById('vk_field').required = false;
  
      }else if (whatsappRadio.checked) {
        telegramField.style.display = 'none';
        phoneField.style.display = 'none';
        whatsappField.style.display = 'block';
        vkField.style.display = 'none';
  
        document.getElementById('telegram_username').required = false;
        document.getElementById('phone_number').required = false;
        document.getElementById('whatsapp_field').required = true;
        document.getElementById('vk_field').required = false;
  
      } else if (vkRadio.checked) {
        telegramField.style.display = 'none';
        phoneField.style.display = 'none';
        whatsappField.style.display = 'none';
        vkField.style.display = 'block';
  
        document.getElementById('telegram_username').required = false;
        document.getElementById('phone_number').required = false;
        document.getElementById('whatsapp_field').required = false;
        document.getElementById('vk_field').required = true;
  
      } else if (phoneRadio.checked && telegramRadio.checked) {
        phoneField.style.display = 'block';
        telegramField.style.display = 'block';
        whatsappField.style.display = 'none';
        vkField.style.display = 'none';
  
        document.getElementById('phone_number').required = true;
        document.getElementById('telegram_username').required = true;
        document.getElementById('whatsapp_field').required = false;
        document.getElementById('vk_field').required = false;
  
      }else {
        phoneField.style.display = 'none';
        telegramField.style.display = 'none';
        whatsappField.style.display = 'none';
        vkField.style.display = 'none';
  
        document.getElementById('phone_number').required = false;
        document.getElementById('telegram_username').required = false;
        document.getElementById('whatsapp_field').required = false;
        document.getElementById('vk_field').required = false;
  
      }
    }*/
  
    phoneCheck.addEventListener('change', updateContactFields);
    telegramCheck.addEventListener('change', updateContactFields);
    whatsappCheck.addEventListener('change', updateContactFields);
    vkCheck.addEventListener('change', updateContactFields);
  
    // Инициализация при загрузке страницы
    updateContactFields();
  });
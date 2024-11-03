function showLogin() {
    document.getElementById('login-section').classList.remove('hidden');
    document.getElementById('register-options').classList.add('hidden');
}

function showRegisterOptions() {
    document.getElementById('register-options').classList.remove('hidden');
    document.getElementById('login-section').classList.add('hidden');
}

function redirectToUserPage(userType) {
    if (userType === 'cliente') {
        alert('Cadastro realizado com sucesso! Redirecionando para a página do cliente.');
        window.location.href = 'cliente.html';
    } else if (userType === 'barbeiro') {
        alert('Cadastro realizado com sucesso! Redirecionando para a página do barbeiro.');
        window.location.href = 'barbeiro.html';
    }
    return false;
}

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -23.55052, lng: -46.633308 }, // Localização de exemplo
        zoom: 13
    });

    var barberLocations = [
        { lat: -23.55352, lng: -46.638308, title: 'Barbeiro João' },
        { lat: -23.55090, lng: -46.63090, title: 'Barbeiro Carlos' }
    ];

    barberLocations.forEach(barber => {
        new google.maps.Marker({
            position: { lat: barber.lat, lng: barber.lng },
            map: map,
            title: barber.title
        });
    });
}

window.onload = initMap;

function selectBarber(barberName) {
    alert(`Você selecionou o barbeiro ${barberName}. Agora, escolha uma data.`);
    document.getElementById('calendar-container').classList.remove('hidden');
}

function showAvailableTimes() {
    const timeSlots = document.getElementById('time-slots');
    timeSlots.innerHTML = ''; // Limpa horários anteriores
    const availableTimes = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"];

    availableTimes.forEach(time => {
        const timeSlot = document.createElement("button");
        timeSlot.classList.add("time-slot-btn");
        timeSlot.textContent = time;
        timeSlot.onclick = () => selectTimeSlot(timeSlot);
        timeSlots.appendChild(timeSlot);
    });
    document.getElementById('time-slot-container').classList.remove('hidden');
}

function selectTimeSlot(timeSlot) {
    document.querySelectorAll('.time-slot-btn').forEach(btn => btn.classList.remove('selected'));
    timeSlot.classList.add('selected');
    document.getElementById('confirm-appointment').classList.remove('hidden');
}

function confirmAppointment() {
    const selectedTime = document.querySelector('.time-slot-btn.selected');
    if (selectedTime) {
        alert(`Agendamento confirmado para o horário ${selectedTime.textContent}!`);
        document.getElementById('calendar-container').classList.add('hidden');
        document.getElementById('time-slot-container').classList.add('hidden');
        document.getElementById('confirm-appointment').classList.add('hidden');
    } else {
        alert('Por favor, selecione um horário.');
    }
}
function addSchedule() {
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    if (date && time) {
        const scheduleList = document.getElementById('available-schedule');
        const scheduleItem = document.createElement('li');
        scheduleItem.textContent = `Data: ${date}, Horário: ${time}`;
        scheduleList.appendChild(scheduleItem);

        document.getElementById('schedule-form').reset();
        alert('Horário adicionado com sucesso!');
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

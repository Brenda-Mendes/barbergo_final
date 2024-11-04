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
        window.location.href = 'cliente.html';
    } else if (userType === 'barbeiro') {
        window.location.href = 'barbeiro.html';
    }
    return false;
}

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -22.970722, lng: -43.186443 }, // Centro calculado para a Zona Sul do Rio
        zoom: 13 // Zoom ajustado para cobrir todos os pontos
    });

    // Localizações dos barbeiros com ícones personalizados
    var barberLocations = [
        { 
            lat: -22.983560, 
            lng: -43.206480, 
            title: 'Barbeiro João', 
            icon: 'img/barbeiro1.jpg' // Substitua pelo URL da foto do João
        },
        { 
            lat: -22.978800, 
            lng: -43.228140, 
            title: 'Barbeiro Carlos', 
            icon: 'img/barbeiro3.jpg' // Substitua pelo URL da foto do Carlos
        },
        { 
            lat: -22.955320, 
            lng: -43.184800, 
            title: 'Barbeiro Pedro', 
            icon: 'img/barbeiro2.jpg' // Substitua pelo URL da foto do Pedro
        }
    ];

    // Adiciona os marcadores ao mapa com ícones personalizados
    barberLocations.forEach(function(barber) {
        new google.maps.Marker({
            position: { lat: barber.lat, lng: barber.lng },
            map: map,
            title: barber.title,
            icon: {
                url: barber.icon, // URL da foto
                scaledSize: new google.maps.Size(50, 50) // Tamanho da imagem (ajuste conforme necessário)
            }
        });
    });
}

window.onload = initMap;

function selectBarber(barberName) {
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
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

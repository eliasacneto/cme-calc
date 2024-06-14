

// let numberOfSurgeryRoom = 12;
// let numberOfSurgeryPerRoomPerDay = 6;
// let isProssessedFactory = true
// let dayOfSurgery = 7
// let intervalFullCME = 12

// let numberOfBedUTI = 30
// let numberOfBedRPA = 149

// let numberOfSurgeryPerDay = numberOfSurgeryRoom * numberOfSurgeryPerRoomPerDay

// let volumePerSurgery = 1.5
// let totalDailyVolumeOfSurgery = volumePerSurgery * numberOfSurgeryPerDay

// let volumeUTIBedPerDay = 0.5
// let totalVolumeDailyUTI = volumeUTIBedPerDay * numberOfBedUTI

// let volumePerBedHospPerDay = 0.05
// let totalVolumeHospDaily = volumePerBedHospPerDay * numberOfBedRPA

// let estimatedTotalVolumeDailyperMaterial = totalVolumeHospDaily + totalVolumeDailyUTI + totalDailyVolumeOfSurgery

// let totalEstimatedVolumeDailyUE = estimatedTotalVolumeDailyperMaterial * 2

// let totalEstimatedVolumeDailyLiters = estimatedTotalVolumeDailyperMaterial * 2 * 54

// let numberOfAutoclave = 3
// let numberOfTermoWasher = 2


let numberOfSurgeryRoom = document.getElementById('numberOfSurgeryRoom');
let numberOfSurgeryPerRoomPerDay = document.getElementById('numberOfSurgeryPerRoomPerDay');
let isProssessedFactory = true
let dayOfSurgery = document.getElementById('dayOfSurgery')
let intervalFullCME = document.getElementById('intervalFullCME')

let numberOfBedUTI = document.getElementById('numberOfBedUTI')
let numberOfBedRPA = document.getElementById('numberOfBedRPA')

let numberOfSurgeryPerDay = numberOfSurgeryRoom * numberOfSurgeryPerRoomPerDay

let volumePerSurgery = document.getElementById('volumePerSurgery')
let totalDailyVolumeOfSurgery = volumePerSurgery * numberOfSurgeryPerDay

let volumeUTIBedPerDay = document.getElementById('volumeUTIBedPerDay')
let totalVolumeDailyUTI = volumeUTIBedPerDay * numberOfBedUTI

let volumePerBedHospPerDay = document.getElementById('volumePerBedHospPerDay')
let totalVolumeHospDaily = volumePerBedHospPerDay * numberOfBedRPA

let estimatedTotalVolumeDailyperMaterial = totalVolumeHospDaily + totalVolumeDailyUTI + totalDailyVolumeOfSurgery

let totalEstimatedVolumeDailyUE = estimatedTotalVolumeDailyperMaterial * 2

let totalEstimatedVolumeDailyLiters = estimatedTotalVolumeDailyperMaterial * 2 * 54

let numberOfAutoclave = 3
let numberOfTermoWasher = 2




function getResult() {
    event.preventDefault()

    let numberOfSurgeryRoom = document.getElementById('numberOfSurgeryRoom').value;
    let numberOfSurgeryPerRoomPerDay = document.getElementById('numberOfSurgeryPerRoomPerDay').value;
    let isProssessedFactory = true
    let dayOfSurgery = document.getElementById('dayOfSurgery');
    let intervalFullCME = document.getElementById('intervalFullCME').value;

    let numberOfBedUTI = document.getElementById('numberOfBedUTI').value;
    let numberOfBedRPA = document.getElementById('numberOfBedRPA').value;

    let numberOfSurgeryPerDay = numberOfSurgeryRoom * numberOfSurgeryPerRoomPerDay

    let volumePerSurgery = document.getElementById('volumePerSurgery').value;
    let totalDailyVolumeOfSurgery = volumePerSurgery * numberOfSurgeryPerDay

    let volumeUTIBedPerDay = document.getElementById('volumeUTIBedPerDay').value;
    let totalVolumeDailyUTI = volumeUTIBedPerDay * numberOfBedUTI

    let volumePerBedHospPerDay = document.getElementById('volumePerBedHospPerDay').value
    let totalVolumeHospDaily = volumePerBedHospPerDay * numberOfBedRPA

    let estimatedTotalVolumeDailyperMaterial = totalVolumeHospDaily + totalVolumeDailyUTI + totalDailyVolumeOfSurgery

    let totalEstimatedVolumeDailyUE = estimatedTotalVolumeDailyperMaterial * 2

    let totalEstimatedVolumeDailyLiters = estimatedTotalVolumeDailyperMaterial * 2 * 54

    rnumberOfSurgeryPerDay = document.getElementById('rnumberOfSurgeryPerDay')
    rtotalDailyVolumeOfSurgery = document.getElementById('rtotalDailyVolumeOfSurgery')
    rnumberOfBedUTI = document.getElementById('rnumberOfBedUTI')
    rtotalVolumeDailyUTI = document.getElementById('rtotalVolumeDailyUTI')
    rvolumePerBedHospPerDay = document.getElementById('rvolumePerBedHospPerDay')
    rtotalVolumeHospDaily = document.getElementById('rtotalVolumeHospDaily')
    restimatedTotalVolumeDailyperMaterial = document.getElementById('restimatedTotalVolumeDailyperMaterial')
    rtotalEstimatedVolumeDailyUE = document.getElementById('rtotalEstimatedVolumeDailyUE')
    rtotalEstimatedVolumeDailyLiters = document.getElementById('rtotalEstimatedVolumeDailyLiters')


    rnumberOfSurgeryPerDay.innerHTML = numberOfSurgeryPerRoomPerDay;
    rtotalDailyVolumeOfSurgery.innerHTML = totalDailyVolumeOfSurgery
    rnumberOfBedUTI.innerHTML = numberOfBedUTI
    rtotalVolumeDailyUTI.innerHTML = totalVolumeDailyUTI
    rvolumePerBedHospPerDay.innerHTML = volumePerBedHospPerDay
    rtotalVolumeHospDaily.innerHTML = totalVolumeHospDaily
    restimatedTotalVolumeDailyperMaterial.innerHTML = estimatedTotalVolumeDailyperMaterial
    rtotalEstimatedVolumeDailyUE.innerHTML = totalEstimatedVolumeDailyUE
    rtotalEstimatedVolumeDailyLiters.innerHTML = totalEstimatedVolumeDailyLiters

}
let measurementsData = {}
let newMeasurement = false
let slider = document.getElementById("slider")
let numMeasurements = 7082

$(document).ready(function () {

    for(let i=1; i<=9; i++) {
        setTimeout(() => {
            let csvPath = './figurer/csv/csv0' + i.toString() + '/measurements.csv'; // Path to your CSV file
        
            // Use AJAX to load the CSV file content
            $.ajax({
                url: csvPath,
                dataType: 'text',
                success: function (data) {
                    // Parse the CSV content into objects
                    let measurementsObject = $.csv.toObjects(data);
                    measurementsData[i.toString()] = measurementsObject
                },
                error: function (xhr, status, error) {
                    console.error("Failed to load the CSV file:", error);
                }
            });

        }, '2')
    }
});

let measurements = function(p) {
    p.setup = function() {
        // let windowWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
        // let windowHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

        let windowHeight = p.windowHeight
        let windowWidth = p.windowWidth
        measurementsWidth = windowWidth * 37/100
        let canvas = p.createCanvas(measurementsWidth, windowHeight)
        canvas.id("sketch2")
        p.background(25)

        setTimeout(() => {
            currentMeasurements = 9
    
            p.fill(225)
            p.noStroke()
            for(let i=0; i<measurementsData[currentMeasurements.toString()].length; i++) {
                p.circle(measurementsData[currentMeasurements][i].x * sketchWidth, (measurementsData[currentMeasurements][i].y/2) + 486, 6)
            }
        }, '20')
    }

    p.draw = function() {
        if(newMeasurement) {
            setNewMeasurements(currentMeasurements)
        }
    }

    slider.oninput = function () {
        numMeasurements = this.value
        setNewMeasurements(currentMeasurements)
    }

    let setNewMeasurements = (m) => {
        currentMeasurements = m
        p.background(25)
        for(let i=0; i<numMeasurements; i++) {
            p.circle(measurementsData[currentMeasurements][i].x * sketchWidth, (measurementsData[currentMeasurements][i].y/2) + 486, 6)
        }
        newMeasurement = false
    }
}
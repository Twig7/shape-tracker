import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Triangle from './triangle.js';

$(document).ready(function() {
  $('#triangle-checker-form').submit(function(event) {
    event.preventDefault();
    const length1 = $('#length1').val();
    const length2 = $('#length2').val();
    const length3 = $('#length3').val();
    const triangle = new Triangle(side1, side2, side3)
    const response = triangle.checkType();
    $('#response').append("<p>" + response + "</p>");
  });
});
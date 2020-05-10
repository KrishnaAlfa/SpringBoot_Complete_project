/**
 * @author dharmesh.khandhar
 * 
 * Generic JS Functions will be added here
 */

function cancel(url)
{
	window.location.assign(url);
}

function validateNumeric(numVal)
{
	if (isNaN(numVal))
		return false;
	else
		return true;
}

function round(value)
{
	return parseFloat(value).toFixed(2);
}

//common names validation,Allow alpha-numeric values and some of special characters, added by DK on 02/11/2017
function validateText(text)
{
	var regName = /^[a-zA-Z0-9\-_ ().]+$/;
	if(regName.test(text) == false)
	{
		return false;
	}
	else
	{
		return true;
	}
}

//common names validation,Allow alpha-numeric values but first character must be alpha, added by DK on 21/06/2017
function validateName(name)
{
	var regName = /^[a-zA-Z][a-zA-Z0-9.\-_ ]+$/;
	if(regName.test(name) == false)
	{
		return false;
	}
	else
	{
		return true;
	}
}

function round(value)
{
	return parseFloat(value).toFixed(2);
}

function isNumeric(value)
{
	return !isNaN(parseFloat(value)) && isFinite(value);
}
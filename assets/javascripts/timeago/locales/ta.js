module.exports = function(number, index) {
  return [
    ['இப்போது', 'சற்று நேரம் முன்பு'],
    ['%s நொடிக்கு முன்', '%s நொடிகளில்'],
    ['1 நிமிடத்திற்க்கு முன்', '1 நிமிடத்தில்'],
    ['%s நிமிடத்திற்க்கு முன்', '%s நிமிடங்களில்'],
    ['1 மணி நேரத்திற்கு முன்', '1 மணி நேரத்திற்குள்'],
    ['%s மணி நேரத்திற்கு முன்', '%s மணி நேரத்திற்குள்'],
    ['1 நாளுக்கு முன்', '1 நாளில்'],
    ['%s நாட்களுக்கு முன்', '%s நாட்களில்'],
    ['1 வாரத்திற்கு முன்', '1 வாரத்தில்'],
    ['%s வாரங்களுக்கு முன்', '%s வாரங்களில்'],
    ['1 மாதத்திற்கு முன்', '1 மாதத்தில்'],
    ['%s மாதங்களுக்கு முன்', '%s மாதங்களில்'],
    ['1 வருடத்திற்கு முன்', '1 வருடத்தில்'],
    ['%s வருடங்களுக்கு முன்', '%s வருடங்களில்']
  ][index];
}
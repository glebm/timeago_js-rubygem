this.timeago.register('th', function(number, index) {
  return [
    ['เมื่อสักครู่นี้', 'อีกสักครู่'],
    ['%s วินาทีที่แล้ว', 'ใน %s วินาที'],
    ['1 นาทีที่แล้ว', 'ใน 1 นาที'],
    ['%s นาทีที่แล้ว', 'ใน %s นาที'],
    ['1 ชั่วโมงที่แล้ว', 'ใน 1 ชั่วโมง'],
    ['%s ชั่วโมงที่แล้ว', 'ใน %s ชั่วโมง'],
    ['1 วันที่แล้ว', 'ใน 1 วัน'],
    ['%s วันที่แล้ว', 'ใน %s วัน'],
    ['1 อาทิตย์ที่แล้ว', 'ใน 1 อาทิตย์'],
    ['%s อาทิตย์ที่แล้ว', 'ใน %s อาทิตย์'],
    ['1 เดือนที่แล้ว', 'ใน 1 เดือน'],
    ['%s เดือนที่แล้ว', 'ใน %s เดือน'],
    ['1 ปีที่แล้ว', 'ใน 1 ปี'],
    ['%s ปีที่แล้ว', 'ใน %s ปี']
  ][index];
})

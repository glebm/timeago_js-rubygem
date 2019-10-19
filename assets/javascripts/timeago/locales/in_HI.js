window.timeago.register('in_HI', function(number, index) {
  return [
    ['अभी', 'कुछ समय'],
    ['%s सेकंड पहले', '%s सेकंड में'],
    ['1 मिनट पहले', '1 मिनट में'],
    ['%s मिनट पहले', '%s मिनट में'] ,
    ['1 घंटे पहले', '1 घंटे में'] ,
    ['%s घंटे पहले', '%s घंटे में'] ,
    ['1 दिन पहले', '1 दिन में'] ,
    ['%s दिन पहले', '%s दिनों में'] ,
    ['1 सप्ताह पहले', '1 सप्ताह में'] ,
    ['%s हफ्ते पहले', '%s हफ्तों में'] ,
    ['1 महीने पहले', '1 महीने में'] ,
    ['%s महीने पहले', '%s महीनों में'] ,
    ['1 साल पहले', '1 साल में'] ,
    ['%s साल पहले','%s साल में']
  ][index];
})

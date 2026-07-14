// Reusable quiz widget for course lessons. Immediate feedback = tight learning loop.
// Markup contract:
//   <div class="quiz" data-quiz>
//     <div class="q">Question text</div>
//     <button class="opt" data-correct>Right answer</button>
//     <button class="opt">Wrong answer</button>
//     <div class="fb" data-feedback="Explanation shown after any click"></div>
//   </div>
// Every .opt in one question should be the same length (no formatting tells).
document.addEventListener('click', function (e) {
  var opt = e.target.closest('.opt');
  if (!opt) return;
  var quiz = opt.closest('.quiz');
  var group = opt.parentElement; // question container
  if (group.dataset.answered) return;
  group.dataset.answered = '1';

  var opts = group.querySelectorAll('.opt');
  opts.forEach(function (o) {
    if (o.hasAttribute('data-correct')) o.classList.add('correct');
  });
  if (!opt.hasAttribute('data-correct')) opt.classList.add('wrong');

  var fb = group.querySelector('.fb') || (quiz && quiz.querySelector('.fb'));
  if (fb && fb.dataset.feedback) { fb.textContent = fb.dataset.feedback; fb.classList.add('show'); }
});

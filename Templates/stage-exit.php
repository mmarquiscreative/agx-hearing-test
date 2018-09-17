<div class="stage-exit" ng-controller="exitController as exit">
  <div class="exit-body">
    <p class="lead-text">Not ready to speak to a hearing expert?</p>
    <p class="lead-text">Get your hearing quiz results emailed to you and learn more about better hearing.</p>

<?php echo do_shortcode('[ninja_form id=1]'); ?>
    <input type="email" placeholder="example@email.com">

    <button ng-click="exit.reportSubmit()" class="btn-submit">Send My Results</button>

    <div class="disclaimer">
      Add checkbox about signing up for enewsletter.
    </div>
  </div>
</div>

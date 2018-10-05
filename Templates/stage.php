<div class="row">
    <div class="col-sm-8 col-sm-offset-2">
        <div id="form-container">
            <div class="page-header text-center">


                <!-- the links to our nested states using relative paths -->
                <!-- add the active class if the state matches our ui-sref
                <div ui-sref-active="hidden" ui-sref=".intro" >-->

                <div id="status-buttons" ng-class="stage.testBool('intro') || stage.testBool('exit') ? 'hidden' : 'text-center nav'">
                    <button id="btn-restart" ng-click="stage.restart()">Restart Quiz</button>
					
                    <img class="agx-hearing-logo logo-stage" src="/wp-content/plugins/agx-hearing-test/img/AGX-Hearing-Color.png" />

                    <div id="stepNavBar">
                        <div ng-class="stage.testBool('quiz') ? 'stepNavItem active' : 'stepNavItem'">Listening Situations</div>
                        <div ng-class="stage.testBool('volume') ? 'stepNavItem active' : 'stepNavItem'" >Calibrate Volume</div>
                        <div ng-class="stage.testBool('tone') ? 'stepNavItem active' : 'stepNavItem'" >Frequency Range</div>
                        <div ng-class="stage.testBool('speech') ? 'stepNavItem active' : 'stepNavItem'" >Speech-in-noise</div>
                        <div ng-class="stage.testBool('results') ? 'stepNavItem active' : 'stepNavItem'" >Results</div>
                    </div>

                </div>
                    <!-- <a ui-sref-active="active" ui-sref=".intro"><span>1</span></a>
                    <a ui-sref-active="active" ui-sref=".quiz"><span>2</span></a>

                    <a ui-sref-active="active" ui-sref=".volume"><span>3</span></a>
                    <a ui-sref-active="active" ui-sref=".toneTest"><span>4</span></a>
                    <a ui-sref-active="active" ui-sref=".speechTest"><span>5</span></a>
                    <a ui-sref-active="active" ui-sref=".results"><span>6</span></a> -->
                </div>



            </div>

            <!-- use ng-submit to catch the form submission and use our angular function -->

            <form id="signup-form" ng-submit="processForm()">

                <!-- our nested state views will be injected here -->
                <div id="form-views" ui-view></div>
            </form>
		
        </div>

    </div>
<!--</div> -->

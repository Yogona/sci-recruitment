<template>
  <div class="card">
    <div class="card-header">
      <h2>Recruitment Registration</h2>
    </div>
    <div class="card-body">
      <form method="post" action="#">
        <!-- Names -->
        <br/>
        <div class="row">
          <div class="col-md-2">
            <Label class="form-label" for="names">Names:</Label>
          </div>
          <div class="col-md-9">
            <input class="form-control" type="text" placeholder="Innocent Zuckerberg" />
          </div>
        </div>

        <!-- Birth date -->
        <br/>
        <div class="row">
          <div class="col-md-2">
            <Label class="form-label" for="names">Birth Date:</Label>
          </div>
          <div class="col-md-9">
            <input class="form-control" type="date" placeholder="Innocent" />
          </div>
        </div>

        <!-- Academic Qualification -->
        <br/>
        <div class="row">
          <div class="col-md-2">
            <Label class="form-label" for="names">Academic Qualification:</Label>
          </div>
          <div class="col-md-9">
            <input class="form-control" type="text" placeholder="Certificate" />
          </div>
        </div>

        <!-- Sex -->
        <br/>
        <div class="row">
          <div class="row">
            <div class="col-md-2">
              <Label class="form-label" for="sex">Sex:</Label>
            </div>
            <div class="col-md-5">
              <div class="form-check">
                <label class="form-check-label" for="male">
                  Male
                </label>
                <input class="form-check-input" type="radio" name="sex" id="male" checked>
              </div>
            </div>

            <div class="col-md-5">
              <div class="form-check">
                  <label class="form-check-label" for="female">
                    Female
                  </label>
                  <input class="form-check-input" type="radio" name="sex" id="female">
              </div>
            </div>
          </div>
        </div>
        <hr/>
          
        <!-- Function -->
        <br/>
        <div class="row">
          <div class="col-md-3">
              <Label class="form-label" for="sex">Function:</Label>
          </div>

          <div class="col-md-3">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
              <label class="form-check-label" for="flexCheckDefault">
                Sales
              </label>
            </div>
          </div>

          <div class="col-md-3">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
              <label class="form-check-label" for="flexCheckChecked">
                Services
              </label>
            </div>
          </div>
          
          <div class="col-md-3">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
              <label class="form-check-label" for="flexCheckChecked">
                Operation
              </label>
            </div>
          </div>
          
        </div>
        <hr/>

        <!-- Action buttons -->
        <br/>
        <div class="row" id="action_btns">
          <div class="col-md-6">
            <input type="submit" class="btn btn-success" value="Submit" />
          </div>
          <div class="col-md-6">
            <input type="button" class="btn btn-danger" value="Decline" />
          </div>
        </div>
      </form>
    </div>
</div>
</template>

<script>
export default {
  name: 'RecruitmentComponent',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped> 
  #action_btns{
    text-align: center;
    padding-left: 10px;
    padding-right: 10px;
  }
  .card-header{
    background-color: rgb(27, 29, 170);
    color: white;
  }
  h2{
    
    text-align: center;
  }

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

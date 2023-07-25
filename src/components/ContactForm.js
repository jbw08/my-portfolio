export default function ContactForm () {
    return(
      <>
      <h2 className="text-center text-6xl pb-6 pt-6">Let's get to work!</h2>
    <div class="container">     
          <form id="form" accept-charset="UTF-8" action="https://usebasin.com/f/fc77d50a35ad" method="POST">
            <div class="columns is-centered">
              <div class="column is-half">
                <div class="field">
                  <label class="label">Name</label>
                  <div class="control is-expanded">
                    <input class="input is-large" name="name" type="text" required=""/>
                  <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Enter Name Here" type="text" name="name"/>
                  </div>
                </div>
              </div>
              <div class="column is-half">
                <div class="field">
                  <label class="label">Email</label>
                  <div class="control is-expanded">
<input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Enter Email Here" type="text" name="search"/>                  </div>
                </div>
              </div>
            </div>
            <div class="columns is-centered">
              <div class="column is-half">
                <div class="field">
                  <label class="label">Type of project</label>
                  <div class="control is-expanded">
                    <div class="select is-fullwidth">
                      <select class="is-large" name="project type" required="">
                        <option value="0" disabled="" selected="" hidden=""> </option>
                        <option>Responsive design</option>
                        <option>Web app</option>
                        <option>Music Project</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div class="column is-half">
                <div class="field">
                  <label class="label">Budget</label>
                  <div class="control is-expanded">
                    <div class="select is-fullwidth">
                      <select class="is-large" name="budget" required="">
                        <option value="0" disabled="" selected="" hidden=""> </option>
                        <option>£0 - £2,500</option>
                        <option>£2,500 - £5,000</option>
                        <option>£5,000+</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="columns is-centered">
              <div class="column">
                <div class="field">
                  <label class="label">Additional details</label>
                  <div class="control is-expanded">
                    <textarea class="textarea is-large placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" name="details" rows="5" required=""></textarea>
                  </div>
                </div>
                <div class="field is-hidden">
                  <label class="is-hidden"></label>
                  <div class="control is-expanded is-hidden">
                    <input class="is-hidden" name="_gotcha" type="hidden"/>
                  </div>
                </div>
              </div>
            </div>
            <div class="columns is-centered">
              <div class="column is-one-third">
                <div class="field">
                  <div class="control">
                    <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
    </>
    );
}
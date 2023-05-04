<template>
  <div class="invite">
    <div class="main">
      <div class="tab-buttons">
        <button
          v-for="(tab, index) in tabs"
          :key="index"
          @click="activeTab = index"
          :class="{active: activeTab === index, completed: tab.completed}"
        >
          <span class="comple" v-if="tab.completed">
            <i class="fas fa-check"></i>
          </span>
          <span v-if="!tab.completed">{{tab.number}}</span>
          {{tab.title}}
        </button>
      </div>
      <div
        class="invite-content"
        v-for="(tab, index) in tabs"
        :key="index"
        v-show="activeTab === index"
      >
        <form>
          <div v-if="tab.type === 'info'">
            <div class="main-inputs">
              <div class="form-group">
                <label for="name">First Name</label>
                <input type="text" id="name" v-model="tab.name" :disabled="buttonClicked" />
              </div>
              <div class="form-group">
                <label for="lastName">Last Name</label>
                <input type="text" id="lastName" v-model="tab.lastName" :disabled="buttonClicked" />
              </div>
            </div>
            <div class="main-inputs">
              <div class="form-group">
                <label for="email">Email Address</label>
                <input type="email" id="email" v-model="tab.email" :disabled="buttonClicked" />
              </div>
              <div class="form-group">
                <label for="phone">Phone Number</label>
                <input
                  type="tel"
                  v-mask="'+38(###) ###-##-##'"
                  placeholder="+38 (___) ___-__-__"
                  id="phone"
                  v-model="tab.phone"
                  :disabled="buttonClicked"
                />
              </div>
            </div>
            <div class="main-inputs">
              <div class="form-group">
                <label for="position">Position</label>
                <input type="text" id="position" v-model="tab.position" :disabled="buttonClicked" />
              </div>
              <div class="form-group">
                <label for="select">Available in company</label>
                <select id="select" v-model="tab.select" :disabled="buttonClicked">
                  <option value>Precoro</option>
                  <option value="evergreen">Evergreen</option>
                  <option value="epam">Epam</option>
                </select>
              </div>
            </div>
          </div>
          <div v-if="tab.type === 'locations'">
            <div class="form-group">
              <label class="required" for="city">Main Location</label>
              <select id="selectCity" v-model="tab.city" :disabled="buttonClicked">
                <option value>Main Precoro US</option>
                <option value="berlin">Main Precoro Berlin</option>
                <option value="venice">Precoro Venice</option>
                <option value="canada">Precoro Canada</option>
                <option value="poland">Main Precoro Poland</option>
                <option value="mexico">Precoro Mexico</option>
                <option value="ukraine">Precoro Ukraine Kyiv</option>
              </select>
              <div class="all-locations">
                <input
                  type="checkbox"
                  @click="toggleSelectAll"
                  v-model="isChecked"
                  :disabled="buttonClicked"
                />
                <h3>Select All Locations</h3>
              </div>
            </div>
            <div class="form-group">
              <div class="lable-available">Available Locations</div>
              <div class="availiable">
                <div class="availiable-city" v-for="city in cities" :key="city.id" :for="city.id">
                  <input
                    type="checkbox"
                    :id="city.id"
                    :value="city.name"
                    v-model="selectedCities"
                    :disabled="buttonClicked"
                  />
                  <h3>{{ city.name }}</h3>
                </div>
              </div>
            </div>
          </div>
          <div class="roles" v-if="tab.type === 'roles'">
            <div>
              <table>
                <thead>
                  <tr>
                    <th>Access to:</th>
                    <th>View only</th>
                    <th>Create</th>
                    <th>Approve</th>
                    <th>Pay</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(product, index) in accessTo" :key="index">
                    <td>{{ product.name }}</td>
                    <td>
                      <input
                        type="checkbox"
                        class="management"
                        :id="'View only ' + index"
                        v-model="product.options[0]"
                        :disabled="buttonClicked"
                      />
                      <label :for="'View only ' + index"></label>
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        class="management"
                        :id="'Create ' + index"
                        v-model="product.options[1]"
                        :disabled="buttonClicked"
                      />
                      <label :for="'Create ' + index"></label>
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        class="management"
                        :id="'Approve ' + index"
                        v-model="product.options[2]"
                        :disabled="buttonClicked"
                      />
                      <label :for="'Approve ' + index"></label>
                    </td>
                    <td
                      v-if="product.name !== 'Receipts' && product.name !== 'Warehouse requests' && product.name !== 'Request for proposals' && product.name !== 'Purchase orders' && product.name !== 'Purchase requests'"
                    >
                      <input
                        type="checkbox"
                        class="management"
                        :id="'Pay ' + index"
                        v-model="product.options[3]"
                        :disabled="buttonClicked"
                      />
                      <label :for="'Pay ' + index"></label>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="details">
              <div class="details-management">
                Management:
                <img class="info" src="../assets/vector.svg" alt="Vector Icon" />
              </div>
              <div class="roles-management">
                <div class="roles-management__list">
                  <div class="list" v-for="manage in managements" :key="manage.id" :for="manage.id">
                    <input
                      class="management"
                      type="checkbox"
                      :id="manage.id"
                      :value="manage.name"
                      v-model="selectedManagement"
                      :disabled="buttonClicked"
                    />
                    {{ manage.name }}
                  </div>
                </div>
                <div class="roles-management__triangle">
                  <input
                    type="checkbox"
                    value="Admin (Full access)"
                    class="management"
                    v-model="selectedManagement"
                    :disabled="buttonClicked"
                  /> Admin (Full access)
                  <img class src="../assets/triangle.svg" alt="triangle Icon" />
                </div>
              </div>
            </div>
            <div class="roles-info">
              <img class="info" src="../assets/vector.svg" alt="Vector Icon" />
              <p>
                The user becomes a
                <a href>Power user</a> if at least ONE of the following roles is selected:
                <br />Approve, View only, Configuration, Suppliers and Items, Budgets, Warehouse manager.
              </p>
            </div>
          </div>
        </form>
      </div>
      <div class="invite-buttons">
        <div class="invite-buttons__switch" v-if="activeTab < tabs.length - 2">
          <label class="switch">
            <input
              type="checkbox"
              class="sw"
              @click="toggleSelectAll"
              v-model="isChecked"
              :disabled="buttonClicked"
            />
            <span class="slider"></span>
          </label>
          <p>Active in all companies</p>
          <img class="info" src="../assets/vector.svg" alt="Vector Icon" />
        </div>
        <button
          v-if="activeTab < tabs.length - 1"
          @click="handleNextTabClick"
          class="button button-next"
        >Next Step</button>
        <button v-else @click="handleCompleteFormClick" class="button button-invite">Invite User</button>
      </div>
    </div>
  </div>
</template>

<script>

import '@fortawesome/fontawesome-free/css/all.css';
export default {

  name: "InviteWindow",
  props: {
  msg: String,

  },
     data() {
    return {

      isChecked: false,
      buttonClicked: false,
      activeTab: 0,
      selectAll: false,
        cities: [
        { id: 'berlin', name: 'Berlin' },
        { id: 'venice', name: 'Vevice Office' },
        { id: 'usa', name: 'USA Office' },
        { id: 'canada', name: 'Canada' },
        { id: 'poland', name: 'Poland Office' },
        { id: 'mexico', name: 'Mexico' },
        { id: 'ukraine', name: 'Ukraine Kiyv Lukivska 7 Main Office' },
      ],
      managements: [
        { id: 'All', name: 'All bellow' },
        { id: 'venice', name: 'Configuration' },
        { id: 'items', name: 'Suppliers and items' },
        { id: 'budgets', name: 'Budgets' },
        { id: 'warehouse', name: 'Warehouse manager' },
        { id: 'reports', name: 'Reports' },
      ],
      selectedCities: [],
      selectedManagement: [],
      tab: {
        select: '',
      },
      tabs: [
  {
    title: 'Main info',
    type: 'info',
    name: '',
    lastName: '',
    email: '',
    phone: '',
    select: '',
    cities: '',
    number: 1,
    completed: false // add completed property
  },
  {
    title: 'Available Locations',
    type: 'locations',
    city: '',
    number: 2,
    completed: false // add completed property
  },
  {
    title: 'Roles',
    type: 'roles',
    radio: '',
    number: 3,
    completed: false // add completed property
  },
],
      accessTo: [
        {
          name: 'All below',
          options: [false, false, false],
        },
        {
          name: 'Warehouse requests',
          options: [false, false, false , false],
        },
        {
          name: 'Purchase requests',
          options: [false, false, false],
        },
        {
          name: 'Request for proposals',
          options: [false, false, false],
        },
        {
          name: 'Purchase orders',
          options: [false, false, false],
        },
        {
          name: 'Receipts',
          options: [false, false, false],
        },
        {
          name: 'Invoices',
          options: [false, false, false],
        },
        {
          name: 'Extenses',
          options: [false, false, false],
        },
      ],
    };
  },
  methods: {
  handleNextTabClick() {
    this.tabs[this.activeTab].completed = true;
    this.activeTab = (this.activeTab + 1) % this.tabs.length;
  },

  handleCompleteFormClick() {

     const selectEl = document.getElementById('select');
      let selectTextContent;
      if (this.selectAll) {
        const options = selectEl.options;
        selectTextContent = Array.from(options).map(option => option.textContent.trim()).join(', ');
      } else {
        const selectedOption = selectEl.selectedOptions[0];
        selectTextContent = selectedOption ? selectedOption.textContent.trim() : '';
      }
      const selectElCity = document.getElementById('selectCity');
      let selectTextContentCity;
      if (this.selectAll) {
        const options = selectElCity.options;
        selectTextContentCity = Array.from(options).map(option => option.textContent.trim()).join(', ');
      } else {
        const selectedOption = selectElCity.selectedOptions[0];
        selectTextContentCity = selectedOption ? selectedOption.textContent.trim() : '';
      }
let selectedOptions = [];
for (const product of this.accessTo) {
  const options = [];
  if (product.options[0]) {
    options.push('View only');
  }
  if (product.options[1]) {
    options.push('Create');
  }
  if (product.options[2]) {
    options.push('Approve');
  }
  if (product.options[3]) {
    options.push('Pay');
  }
  selectedOptions.push(`${product.name}: ${options.join(', ')}`);
}

    console.log({
      name: this.tabs[0].name,
      lastName: this.tabs[0].lastName,
      email: this.tabs[0].email,
      phone: this.tabs[0].phone,
      select: selectTextContent,
      city: selectTextContentCity,
      cities: this.selectedCities,
      managements: this.selectedManagement,
      roles: selectedOptions,
      position: this.tabs[0].position,
      accessTo: this.accessTo,
    });
    this.buttonClicked = true;
    this.tabs[this.activeTab].completed = true;
    this.activeTab = (this.activeTab) % this.tabs.length;
  },
   toggleSelectAll() {
      const selectEl = document.getElementById('select');
      const options = selectEl.options;
      for (let i = 0; i < options.length; i++) {
        options[i].selected = !this.selectAll;
      }
      this.selectAll = !this.selectAll;
    },

},

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
$white: #ffffff;
$grey: rgba(0, 0, 0, 10%);
$button-color: #1d2452;
$blue: rgba(65, 90, 218, 1);
$lightBlue: rgba(221, 222, 229, 1);
$lightBlue2: rgba(198, 200, 212, 1);
$labelGrey: rgba(29, 36, 82, 60%);
$spanGrey: rgba(94, 106, 117, 1);
$h3-color: rgba(29, 36, 82, 1);
$access-color: rgba(103, 111, 143, 1);
@mixin font-16 {
  font-weight: 500;
  font-size: 16px;
  line-height: 23.04px;
}
@mixin font-16H {
  font-weight: 500;
  font-size: 16px;
  line-height: 23.04px;
  color: $h3-color;
}
@mixin labelAccess {
  color: $access-color;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  margin-right: 16px;
}
@mixin flex-column {
  display: flex;
  flex-direction: column !important;
}
@mixin flex {
  display: flex;
}
@mixin align-center {
  display: flex;
  align-items: center;
}
@mixin flow {
  flex-flow: wrap;
}
.main {
  &-inputs {
    @include flex;
  }
}
.invite {
  &-content {
    margin: 19px 24px 0;
  }
  &-buttons {
    @include align-center;
    padding: 20px 24px 24px 24px;
    border-top: 1px solid $grey;

    justify-content: flex-end;
    margin-top: 13px;
    &__switch {
      @include font-16;
      @include align-center;
      margin-right: auto;
      width: 255px;
      justify-content: space-between;
      & p {
        margin: 0;
      }
    }
  }
}
.info {
  opacity: 50%;
  width: 19.5px;
  height: 19.5px;
}
.tab-buttons {
  @include flex;
  border-bottom: 1px solid $grey;
  height: 64px;
}
.tab-buttons button {
  @include font-16;
  border: none;
  background-color: transparent;
  cursor: pointer;
  // padding: 0 0 16px 0;
  font-style: normal;
  outline: none;
  margin: 0 0 0 24px;
  color: $labelGrey;

  & span {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    padding: 8px 12px;
    background: rgba(94, 106, 117, 10%);
    font-size: 14px;
    line-height: 16.94px;
    margin-right: 6px;
    color: $spanGrey;
    &.comple {
      padding: 8px 11px 8px 11px !important;
      background: $blue;
      color: white;
      margin-right: 7px;
    }
  }
}
.tab-buttons button.active {
  color: $blue;
  border-bottom: 2px solid $blue;
  margin-bottom: -2px;
  & span {
    color: $blue;
    width: 30px;
    height: 37px;
    border-radius: 50%;
    padding: 8px 12px;
    background: rgba(65, 90, 218, 0.05);
    font-size: 14px;
    line-height: 16.94px;
    &.comple {
      padding: 8px 11px 8px 11px !important;
      background: $blue;
      color: white;
      margin-right: 7px;
    }
  }
}
.form-group label {
  display: block;
  text-align: left;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  margin-bottom: 4px;
  color: $labelGrey;
}
.availiable {
  @include flex-column;
  @include flow;
  height: 160px;
  width: fit-content;
  &-city {
    @include align-center;
    margin-bottom: 16px;
  }
  &-city:nth-last-child(-n + 3) {
    margin-left: 56px;
  }
}
.form-group {
  margin: 0 20px 20px 0;
  text-align: left;

  & select {
    @include align-center;
    @include font-16;
    color: $h3-color;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-image: url('../assets/arrow.svg');
    background-repeat: no-repeat;
    background-position: 324px center;

    flex-direction: row;

    padding: 9px 8px;

    width: 347px;

    height: 43px;

    border: 1px solid rgba(29, 36, 82, 0.1);
    border-radius: 8px;
  }
  & input {
    @include font-16;
    color: $h3-color;
    width: 329px;
    border: 1px solid #ccc;
    background: #ffffff;
    border: 1px solid rgba(29, 36, 82, 0.1);
    border-radius: 8px;
    font-style: normal;
    padding: 9px 8px;
    height: 22px;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
  }
}
label {
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: $labelGrey;
}
label.required::after {
  content: '*';
  color: red;
  margin-right: 5px;
}
input[type='checkbox'] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  display: inline-block;
  position: relative;
  width: 16px;
  height: 16px;
  border: none;
  vertical-align: middle;
  cursor: pointer;
}
input.management[type='checkbox']:before {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 16px;
  height: 16px;
  background-color: #ffffff;
  border-radius: 4px;
  transition: all 0.3s ease;
  border: 1px solid $lightBlue2;
}
input.management[type='checkbox']:checked:before {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 16px;
  height: 16px;
  background-color: $blue;

  border-radius: 4px;
  border: 1px solid $lightBlue2;
}

/* Show the checkmark when the checkbox is checked */
input.management[type='checkbox']:checked:after {
  content: '';
  display: block;
  position: absolute;
  top: 3px;
  left: 6px;
  width: 4px;
  height: 8px;
  border: 3px solid #ffffff;
  transition: all 0.3s ease;
  border-width: 0 2px 2px 0;
  transform: rotate(46deg);
}

input[type='checkbox']:before {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 18px;
  height: 18px;
  background-color: #ffffff;
  border-radius: 4px;
  transition: all 0.3s ease;
  border: 1px solid rgba(29, 36, 82, 0.1);
}
input[type='checkbox']:checked:before {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 18px;
  height: 18px;
  background-color: $blue;

  border-radius: 4px;
  border: 1px solid rgba(29, 36, 82, 0.1);
}
input.sw[type='checkbox']:checked:before {
  border: none;
  background: none;
}
input.sw[type='checkbox']:before {
  border: none;
  background: none;
}

/* Show the checkmark when the checkbox is checked */
input[type='checkbox']:checked:after {
  content: '';
  display: block;
  position: absolute;
  top: 4px;
  left: 7px;
  width: 4px;
  height: 8px;
  border: 3px solid #ffffff;
  transition: all 0.3s ease;
  border-width: 0 2px 2px 0;
  transform: rotate(46deg);
  /* Add this line to set the background color */
}

.button {
  background: $button-color;
  color: $white;
  border-radius: 20px;
  border: none;
  padding: 10.5px 16px;
  line-height: 19.36px;
  font-weight: 600;
  font-size: 16px;
  &-next {
    width: 109px;
  }
}
.switch {
  position: relative;
  display: inline-block;
  width: 44px;
  height: 24px;
  border-radius: 24px;
}

.switch input {
  opacity: 1;
  width: 0;
  height: 0;
  border-radius: 24px;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 24px;
}

.slider:before {
  position: absolute;
  content: '';
  height: 20px;
  width: 20px;
  left: 2px;
  bottom: 2px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 24px;
}

input:checked + .slider {
  background-color: $blue;
  border-radius: 24px;
}

input:focus + .slider {
  border-radius: 24px;
}

input:checked + .slider:before {
  -webkit-transform: translateX(20px);
  -ms-transform: translateX(20px);
  transform: translateX(20px);
  border-radius: 24px;
}

/* Rounded sliders */
.slider.round {
  border-radius: 24px;
}

.slider.round:before {
  border-radius: 24px;
}
.fa-check::before {
  font-size: 10px;
  color: white;
}
.roles {
  @include flex;
  @include flow;

  &-info {
    @include align-center;
    margin-top: 15.5px;
    margin-bottom: 32px;
    font-weight: 500;
    font-size: 14px;
    line-height: 18.2px;
    color: rgba(29, 36, 82, 0.5);
    background: rgba(244, 244, 255, 0.5);
    padding: 10px 12px 10px 14px;
    width: 636px;
    text-align: left;
    border-radius: 16px;
    & .info {
      margin-right: 10px;
    }
    & p {
      margin: 0;
    }
  }

  &-management {
    @include font-16;
    @include flex-column;

    border-left: 1px solid $lightBlue;
    justify-content: space-between;
    &__list .list {
      margin-bottom: 16px;
      margin-left: 31px;
      @include font-16H;
      & .management {
        margin-right: 16px;
      }
    }
    &__triangle {
      @include align-center;
      margin-top: 40px;
      margin-left: 31px;
      @include font-16H;
      & .management {
        margin-right: 16px;
      }
      & img {
        margin-left: 17px;
      }
    }
  }
}
td:first-child,
th:first-child {
  text-align: left;
  width: 170px;
  padding-right: 24px;
}
td:first-child {
  @include font-16H;
}

.all-locations {
  @include align-center;
  margin: 24px 0 16px 0;
}
.lable-available {
  @include font-16;
  color: $labelGrey;
  margin-bottom: 10px;
}
h3 {
  font-size: 16px;
  font-weight: 500;
  line-height: 19.34px;
  margin: 3px 0 0 8px;
  color: $h3-color;
}
.details {
  text-align: left;

  &-management {
    @include labelAccess;
    @include align-center;
    margin-bottom: 24px;
    margin-top: 3px;
    margin-left: 31px;
    & img {
      margin-left: 6.25px;
    }
  }
}
thead th {
  @include labelAccess;
}

thead tr th {
  padding-right: 16px;
  padding-bottom: 22px;
}
tbody tr td {
  padding-right: 16px;
  padding-bottom: 13.5px;
}
a {
  color: rgba(65, 90, 218, 1);
  text-decoration: none;
  border-bottom: 1px solid rgba(65, 90, 218, 1);
}

a:hover {
  border-bottom-color: transparent;
}
</style>

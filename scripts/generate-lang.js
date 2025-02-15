// All the options that are probably not in the translation file,
// The generator below will add them to the translation file
const path = require("path");
const fs = require("fs");
let file = require("../client/src/language.json");

console.log("[TRANSLATION]: Checking language file...");

/**
 *! DO NOT TRANSLATE THESE LINES!
 *! PLEASE DON'T!
 *
 *! Translate in "language.json"
 */

const ProbablyNotInTheTranslateFile = {
  auth: {
    ...file.auth,
    username: "Username",
    citizen_name: "Citizen name",
    error_username: "Could not get username",
    error_citizen: "Could not get citizen name",
  },
  global: {
    ...file.global,
    request: "Request",
    panic_button: "has activated panic button",
    signal_100: "Signal 100 is in effect",
    currently_active_as: "Currently active as:",
    assigned_to_call: "You were assigned to a call!",
    loading: "Loading",
    go_back: "Go back",
    forbidden: "You are not allowed to view the requested page.",
    not_enabled:
      "That feature is disabled by the CAD owner. If you want like to use this feature, let your CAD owner know!",
    page_not_found: "Whoops! I could not find that page!",
    hide: "Hide",
    show: "Show",
    manage: "Manage",
    none_set: "None set",
    no_options: "No options",
  },
  court: {
    house: "San Andreas Courthouse",
    request_expungement: "Request Expungement",
    requests: "Expungement Requests",
    no_requests: "You don't have any requests. FYI: declined requests get deleted",
    citizen_name: "Enter your citizen name.",
    no_warrants: "You don't have any warrants.",
    no_arr_reports: "You don't have any arrest reports.",
    no_tickets: "You don't have any tickets.",
  },
  notifications: {
    center: "Notification Center",
    no_notifications: "You don't have any notifications",
  },
  taxi: {
    dash: "Taxi Dashboard",
    active_calls: "Active taxi calls",
    create_taxi_call: "Create taxi call",
    taxi_service: "Call taxi service",
  },
  truck_logs: {
    ...file.truck_logs,
    enter_starting_time: "Enter starting time",
  },
  ems_fd: {
    ...file.ems_fd,
    add_medical_record: "Add medical record",
    declare_dead: "Declare dead",
    declare_alive: "Declare alive",
  },
  account: {
    owner_cannot_delete_account: "The owner is not able to delete their account.",
    steam_id: "Steam ID",
    unlink_steam: "Unlink Steam",
  },
  bleeter: {
    ...file.bleeter,
    delete_bleet: "Delete bleet",
    uploaded_by: "Uploaded by",
    bleet_not_found: "Bleet was not found",
  },
  citizen: {
    ...file.citizen,
    cannot_change_owner_rank: "Cannot change the owner's rank",
    not_found: "Citizen was not found",
    managing_employee: "Managing employee:",
    viewing_company: "Viewing Company",
    company_not_found: "Company was not found",
    create_company_post: "Create company post",
    create_medical_record: "Create medical record",
    edit_reg_vehicle: "Edit registered vehicles",
    vehicle_not_found: "Vehicle was not found",
    weapon_custom_serial: "Custom Serial number (Optional)",
    phone_number: "Phone number",
    editing_citizen: "Editing citizen",
  },
  officers: {
    ...file.officers,
    callsign: "Callsign",
    logs: "My officer logs",
    no_logs: "You don't have any officer logs.",
    officer_no_logs: "This officer does not have any logs yet",
    started_at: "Started at",
    ended_at: "Ended at",
    not_ended_yet: "Not ended yet",
    total_time: "Total time on-duty",
    no_officers: "You don't have any officers.",
    on_off_duty: "ON/OFF Duty",
    manage_officers: "Manage Officers",
    citizen_dead: "INFO: This citizen was declared dead on",
    add_note: "Add note",
    save_note: "Save note",
    plate_or_vin: "Enter Plate or VIN number",
    select_office: "Must select an officer before continuing",
    suspend_license: "Suspend License",
    suspended: "Suspended",
  },
  admin: {
    ...file.admin,
    max_plate_length: "max plate length",
    socket_url: "Live map Socket URL",
    steam_api_key: "Steam API key",
    save: "Save Settings",
    enable_disable_features: "Enable/Disable Features",
    value_not_found: "Value was not found",
    total_items: "Total items",
    set_status: "Should set the status",
    set_off_duty: "Should set the officer to off-duty",
    no_units: "This CAD doesn't have any units yet",
    no_unit_with_name: "No unit found with that name",
    officer_logs: "Officer logs",
    managing_unit: "Managing unit",
    leo_supervisor: "LEO Supervisor",
    mem_not_found: "Member was not found",
    ban_hammer: "Use the ban hammer",
    remove_user: "Remove User",
    cannot_remove_own_acc: "You cannot remove your own account",
    cannot_remove_owner_acc: "You cannot remove the owner's account",
    no_expungement_requests: "There are no active requests",
    officer_management: "Officer Management",
    supervisor_panel: "Supervisor Panel",
  },
  codes: {
    code: "Code",
    add_10_code: "Add 10 Code",
    code_where: "Where should these codes be displayed",
    select_color: "Select a color",
    what_it_do: "What should this code do?",
    add_code: "Add",
    edit_10_code: "Edit 10 Code",
    not_found: "Code not found",
    add_penal_code: "Add penal code",
    edit_penal_code: "Edit Penal Code",
    penal_code_management: "Penal Code Management",
    penal_codes: "Penal Codes",
    no_penal_codes: "This CAD doesn't have any penal codes",
    pages: "Pages",
    should_do: "Should do",
    color: "Color",
    codes_10: "10 Codes",
    position: "Position",
  },
  dispatch: {
    ...file.dispatch,
    mark_code_4: "Mark as code 4",
    remove_marker: "Remove marker",
    place_marker: "Place marker",
    leo: "LEO",
    ems_fd: "EMS-FD",
    active_units: "Active Units",
    live_map: "Live map",
    en_signal_100: "Enable signal 100",
    dis_signal_100: "Disable signal 100",
    panic_button: "Panic Button",
    open_name_search: "Open name search",
    events: "Events",
    event: "Event",
    add_event: "Add event",
    no_events: "No events logged for this call",
    hide_blips: "Hide Blips",
    show_blips: "Show Blips",
    show_all_players: "Show all players",
    call: "Call",
    citizen_call: "Citizen Call",
  },
  nav: {
    ...file.nav,
    courthouse: "Courthouse",
  },
};

const keys = Object.keys(ProbablyNotInTheTranslateFile);

Object.keys(file).forEach((fileKey) => {
  Object.keys(ProbablyNotInTheTranslateFile).map((tKey) => {
    if (!keys.includes(fileKey)) {
      const key = keys.find((k) => k.toLowerCase() === tKey);

      if (!file[key]) {
        file[key] = ProbablyNotInTheTranslateFile[key];
      } else {
        const fileKeys = Object.keys(file[key]);
        const probsNotKeys = Object.keys(ProbablyNotInTheTranslateFile[key]);

        let alreadyExists = false;

        probsNotKeys.map((k) => {
          if (!fileKeys.includes(k)) {
            file[key][k] = ProbablyNotInTheTranslateFile[key][k];
          } else {
            // if the key already exists in the translation file
            // return
            return (alreadyExists = true);
          }
        });

        if (alreadyExists === false) {
          console.log("Some keys were not found in the language file, adding them now...");
          file[key] = ProbablyNotInTheTranslateFile[key];
        }
      }
    }
  });
});

if (!file.admin.values["call-types"]) {
  file.admin.values["call-types"] = {
    index: "Call Types",
    add: "Add call type",
    manage: "Manage call types",
    name: "Enter Call type",
    none: "There are call types found",
    deleted: "Successfully deleted call type",
    updated: "Successfully updated call type",
    added: "Successfully added call type",
  };
}

fs.writeFileSync(path.resolve("client/src/language.json"), JSON.stringify(file, null, 4));

console.log("[TRANSLATION]: Successfully checked translation file.");

<?php
// This file is part of Moodle - https://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <https://www.gnu.org/licenses/>.

/**
 * Plugin version and other meta-data are defined here.
 *
 * @package     local_boating
 * @copyright   2024 Samadhan Solution Pty Ltd <fazlu@samadhan.com.au>
 * @license     https://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */


defined('MOODLE_INTERNAL') || die();


/**
 * local_greetings_before_footer
 *
 * @param navigation_node $frontpage Node representing the front page in the navigation tree.
 */
function local_boating_before_footer() {
    global $PAGE;
    $PAGE->requires->js( new moodle_url($CFG->wwwroot . '/local/boating/js/custom.js'));
}

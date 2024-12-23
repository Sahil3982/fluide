import React from "react";

const Calendar = () => {
  return (
    <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">August 2024</h2>
        <div className="flex space-x-2">
          <button className="text-gray-500 hover:text-gray-700">&lt;</button>
          <button className="text-gray-500 hover:text-gray-700">&gt;</button>
        </div>
      </div>
      <table className="w-full text-center m-2">
        <thead>
          <tr className="text-lg">
            <th>Mo</th>
            <th>Tu</th>
            <th>We</th>
            <th>Th</th>
            <th>Fr</th>
            <th>Sa</th>
            <th>Su</th>
          </tr>
        </thead>
        <tbody className="text-lg">
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
          </tr>
          <tr>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <td>10</td>
          </tr>
          <tr>
            <td>11</td>
            <td>12</td>
            <td>13</td>
            <td>14</td>
            <td>15</td>
            <td>16</td>
            <td>17</td>
          </tr>
          <tr>
            <td>18</td>
            <td>19</td>
            <td>20</td>
            <td>21</td>
            <td className="bg-[#0F172A] text-white rounded-full">22</td>
            <td>23</td>
            <td>24</td>
          </tr>
          <tr>
            <td>25</td>
            <td>26</td>
            <td>27</td>
            <td>28</td>
            <td>29</td>
            <td>30</td>
            <td>31</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;

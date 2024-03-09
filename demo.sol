// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PatientData {
    address public owner;
    struct Patient {
        string data; // Simplified; in reality, this could be encrypted data
        bool isDataStored;
    }
    
    mapping(address => Patient) private patientData;
    mapping(address => bool) private hospitals;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner");
        _;
    }

    modifier onlyHospital() {
        require(hospitals[msg.sender], "Not a registered hospital");
        _;
    }

    // Function to add or update patient data (can only be called by the patient)
    function addOrUpdateData(string calldata _data) external {
        patientData[msg.sender] = Patient(_data, true);
    }

    // Register a hospital (can only be done by the contract owner)
    function registerHospital(address _hospital) external onlyOwner {
        hospitals[_hospital] = true;
    }

    // Retrieve patient data (can only be called by registered hospitals)
    function getPatientData(address _patient) external view onlyHospital returns (string memory) {
        require(patientData[_patient].isDataStored, "No data stored for this patient");
        return patientData[_patient].data;
    }
}

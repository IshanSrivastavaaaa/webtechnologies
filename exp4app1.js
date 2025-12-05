// Add these variables inside the BillController
$scope.isEditing = false;
$scope.currentRecord = {};
$scope.originalRecord = {};

// Function to start editing a record
$scope.edit = function(record) {
    $scope.isEditing = true;
    // Create a deep copy to edit, keeping the original intact until saved
    $scope.currentRecord = angular.copy(record);
    $scope.originalRecord = record; // Reference to the actual object in the array
};

// Function to save the changes
$scope.updateRecord = function() {
    // Find the index of the original record
    const index = $scope.records.indexOf($scope.originalRecord);

    if (index !== -1) {
        // Update the original record in the array with the edited data
        $scope.records[index] = angular.copy($scope.currentRecord);
        
        // Ensure the LocalStorage is updated
        saveData(); 
    }
    
    // Reset state
    $scope.isEditing = false;
    $scope.currentRecord = {};
    $scope.originalRecord = {};
};

// Function to cancel editing
$scope.cancelEdit = function() {
    $scope.isEditing = false;
    $scope.currentRecord = {};
    $scope.originalRecord = {};
};

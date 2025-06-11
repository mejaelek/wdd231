 <?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    function clean($data) {
        return htmlspecialchars(trim($data));
    }

    $firstName = clean($_POST['firstName']);
    $lastName = clean($_POST['lastName']);
    $title = clean($_POST['title']);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $phone = clean($_POST['phone']);
    $organization = clean($_POST['organization']);
    $description = clean($_POST['description']);
    $membership = clean($_POST['membership']);
    $timestamp = clean($_POST['timestamp']);

    // Save to file (for demo; you could use a database)
    $entry = "$timestamp | $firstName $lastName | $title | $email | $phone | $organization | $description | $membership\n";
    file_put_contents("applications.txt", $entry, FILE_APPEND);

    header("Location: thankyou.html?firstName=$firstName&lastName=$lastName&title=$title&email=$email&phone=$phone&organization=$organization&description=" . urlencode($description) . "&membership=$membership&timestamp=$timestamp");
    exit();
}
?>

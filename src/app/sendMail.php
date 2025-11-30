<?php
$allowedOrigin = 'https://robin-erike.de';

switch ($_SERVER['REQUEST_METHOD']) {
  case 'OPTIONS':
    header("Access-Control-Allow-Origin: $allowedOrigin");
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
    header('Access-Control-Max-Age: 86400');
    exit;

  case 'POST':
    header("Access-Control-Allow-Origin: $allowedOrigin");
    header('Content-Type: application/json; charset=utf-8');

    $json = file_get_contents('php://input');
    $params = json_decode($json, true);

    $email   = trim($params['email']   ?? '');
    $name    = trim($params['name']    ?? '');
    $message = trim($params['message'] ?? '');

    if ($name === '' || $message === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
      http_response_code(400);
      echo json_encode(['ok' => false, 'error' => 'Invalid payload']);
      exit;
    }

    $to       = 'robinerike@gmail.com';
    $safeName = htmlspecialchars($name,  ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
    $safeEmail = htmlspecialchars($email, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');

    // Betreff (sichtbar im Posteingang)
    $subject = 'Kontakt: ' . $safeName . ' <' . $safeEmail . '>';

    // Body korrekt zusammenbauen (nicht überschreiben!)
    $body  = '';
    $body .= 'Von: ' . $safeName . ' &lt;' . $safeEmail . '&gt;<br>';
    $body .= 'E-Mail: ' . $safeEmail . '<br><br>';
    $body .= nl2br(htmlspecialchars($message, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8'));

    // Header (From = deine Domain; Reply-To = Absender)
    $headers   = [];
    $headers[] = 'MIME-Version: 1.0';
    $headers[] = 'Content-Type: text/html; charset=utf-8';
    $headers[] = 'From: noreply@robin-erike.de';
    // saubere Formatierung von Reply-To
    $replyToName = str_replace(['"', "\r", "\n"], ['\'', '', ''], $safeName);
    $headers[] = 'Reply-To: "' . $replyToName . '" <' . $email . '>';

    $ok = @mail($to, $subject, $body, implode("\r\n", $headers));

    if ($ok) {
      echo json_encode(['ok' => true]);
    } else {
      http_response_code(500);
      echo json_encode(['ok' => false, 'error' => 'Mail failed']);
    }
    exit;

  default:
    header('Allow: POST, OPTIONS', true, 405);
    exit;
}

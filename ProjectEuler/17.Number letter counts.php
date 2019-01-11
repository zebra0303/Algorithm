<?php
/*
'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'hundred'
*/
$words = [
  '1' => 'one', '2' => 'two', '3' => 'three', '4' => 'four', '5' => 'five',
  '6' => 'six', '7' => 'seven', '8' => 'eight', '9' => 'nine', '10' => 'ten',
  '11' => 'eleven', '12' => 'twelve', '13' => 'thirteen', '14' => 'fourteen', '15' => 'fifteen',
  '16' => 'sixteen', '17' => 'seventeen', '18' => 'eighteen', '19' => 'nineteen',
  '20' => 'twenty', '30' => 'thirty', '40' => 'forty', '50' => 'fifty',
  '60' => 'sixty', '70' => 'seventy', '80' => 'eighty', '90' => 'ninety',
  '100' => 'hundred', '1000' => 'thousand'
];
$sum = 0;

function convert_en($number){
  global $words;
  $string = "";

  if($number == 1000) return $words['1'].$words['1000'];
  $arr_num = array_reverse(str_split((string) $number));

  $num10 = (isset($arr_num[1]) && $arr_num[1] !== '0') ? (int) $arr_num[1].$arr_num[0] : (int) $arr_num[0];

  if($num10 > 0){
    if($num10 <= 20){
      $string .= $words[$num10];
    }
    else {
      $string .= $words[$arr_num[1]*10];

      if( $arr_num[0] !== '0'){
        if(isset($arr_num[1]) && $arr_num[1] > 0) {
          $string .= "-";
        }
        $string .= $words[$arr_num[0]];
      }
    }
  }

  if( isset($arr_num[2]) ){
    $add_chr =  ($string !== "") ?  ' and '.$string : "";
    $string = $words[$arr_num[2]].' '.$words['100'].$add_chr;
  }
  return $string;
}
for($i=1 ; $i <= 1000 ; $i++){
  $word = convert_en($i);
  $word = preg_replace('/[\s-]/', '', $word);
  $sum += strlen($word);
}
echo $sum;

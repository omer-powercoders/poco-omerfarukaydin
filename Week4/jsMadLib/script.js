function blanks(noun, adjective, verb, adverb, noun2, adj2, verb2, adv2) {
     let result = "";

 noun = "dog";
  adjective = "big";
  verb = "ran";
 adverb = "quickly";
 noun2 = "cat";
 adj2 = "little";
 verb2 = "walk";
 adv2 = "slowly";
 
result += "Her " + adjective +" "+ noun +" "+ verb + " very " + adverb + " . " + "But " + " my " + noun2 +" "+ adverb +" "+ adj2 + " very " + adv2 + " . ";

  return result;
}


alert(blanks("dog", "big", "ran", "quickly", "cat", "little", "hit", "slowly"));



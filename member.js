function skillsMember() {
  // Skills
  var skills = document.querySelectorAll(".skills");
  for (var i = 0; i < skills.length; i++) {
    var skill = skills[i];
    var skillItems = skill.querySelectorAll("li");
    for (var j = 0; j < skillItems.length; j++) {
      var skillItem = skillItems[j];
      var skillItemContent = skillItem.innerHTML;
      var skillItemContentArray = skillItemContent.split(" ");
      var skillItemContentArrayLength = skillItemContentArray.length;
      var skillItemContentLast = skillItemContentArray[skillItemContentArrayLength - 1];
      var skillItemContentLastNumber = Number(skillItemContentLast);
      var skillItemContentLastNumberType = typeof skillItemContentLastNumber;
      if (skillItemContentLastNumberType === "number") {
        var skillItemContentArrayNew = skillItemContentArray.slice(0, skillItemContentArrayLength - 1);
        var skillItemContentNew = skillItemContentArrayNew.join(" ");
        skillItem.innerHTML = skillItemContentNew;
        skillItem.style.width = skillItemContentLastNumber + "%";
      }
    }
  }
}
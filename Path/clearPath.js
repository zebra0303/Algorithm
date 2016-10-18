var log = console.log,
    path01 = "../dir01/./dir02/../dir03/",
    path02 = "../../dir01/./dir02/../dir03/../",
    path03 = "abc/../dir1/dir2/../dir3/dir4";

    function clearPathRegExp(path) {
      path = path.replace(/(?:[^\/]+\/\.\.\/|\.?\.\/)/g, "");
      return path;
    }

    function clearPathArr(path) {
      var arr_dirs = path.split("/"),
      i,
      len_arr = arr_dirs.length,
      dir,
      tmp_arr = [];

      for(i=0; i<len_arr; i++) {
        dir = arr_dirs[i];
        if(dir === "..") {
          tmp_arr.pop();
        }
        else if (dir !== ".") {
          tmp_arr.push(dir);
        }
      }
      return tmp_arr.join("/");
    }

    log(path01);
    log(clearPathRegExp(path01));
    log(clearPathArr(path01));

    log("-----------------------------------");
    log(path02);
    log(clearPathRegExp(path02));
    log(clearPathArr(path02));

    log("-----------------------------------");
    log(path03);
    log(clearPathRegExp(path03));
    log(clearPathArr(path03));

package net.purify.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.purify.models.Users;

@Repository
public interface LoginRepository extends JpaRepository<Users, Integer> {

	public Users findByMailAndPassword(String mail, String password);

	public Users findByMail(String mail);

	public Users findByRole(String role);

}
